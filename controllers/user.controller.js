const User = require("../models/user.model");
const { extend } = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    let users = await User.find({});
    users = users.map((user) => {
      user.password = undefined;
      return user;
    });
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to get the list of users",
      errMessage: err.message,
    });
  }
};

const findUser = async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username });
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({_id: user._id, name: user.name},process.env.JWT_SECRET, { expiresIn: "24h" });
      res.json({ success: true, token });
    } else {
      res.status(401).json({
        success: false,
        message: "Username and password does not match",
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: "Username does not exsist",
    });
  }
};

const registerUser = async (req, res) => {
  try {
    let userData = req.body;
    const usernameExsists = await User.exists({ username: userData.username });
    const emailExsists = await User.exists({ email: userData.email });
    if (usernameExsists) {
      res.status(409).json({ success: false, message: "Username is taken." });
      return usernameExsists;
    }
    if (emailExsists) {
      res
        .status(409)
        .json({ success: false, message: "Email is already registered." });
      return emailExsists;
    }
    userData.password = bcrypt.hashSync(userData.password, 10);
    let newUser = new User(userData);
    newUser = await newUser.save();

    res.json({ success: true, message:"Successfully added new user" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to add new user",
      errMessage: err.message,
    });
  }
};

const findUserById = async (req, res, next, userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw Error("Unable to fetch the user details");
    }
    req.user = user;
    next();
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Unable to retrive the user details" });
  }
};

const getUserById = async (req, res) => {
  const { user } = req;
  user.password = undefined;
  res.json({ success: true, user });
};

const updateUser = async (req, res) => {
  let { user } = req;
  const userUpdates = req.body;
  const userWithSameUsername = await User.findOne({username: userUpdates.username});
  if(userWithSameUsername){
    return res.status(403).json({success: false, message:"Username updation failed. Another user exists with the same username."});
  }
  const userWithSameEmail = await User.findOne({email: userUpdates.email});
  if(userWithSameEmail){
    return res.status(403).json({success: false, message:"Email updation failed. Another user exists with the same email."});
  }
  user = extend(user, userUpdates);
  user = await user.save();
  user.password = undefined;
  res.json({ success: true, user });
};

module.exports = {
  getUsers,
  registerUser,
  findUser,
  findUserById,
  getUserById,
  updateUser,
};
