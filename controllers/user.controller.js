const User = require("../models/user.model");
const { extend } = require("lodash");
const bcrypt = require("bcrypt");

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
  //verify brcypted password and check
  const usernameExsists = await User.exists({ username });
  if (usernameExsists) {
    let user = await User.findOne({ username });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        res.json({ success: true, user: { _id: user._id, name: user.name } });
      } else {
        res.status(401).json({
          success: false,
          message: "Username and password does not match",
        });
      }
    }
  } else {
    res.status(401).json({
      success: false,
      message: "Username does not exsist",
    });
  }
};

const addUser = async (req, res) => {
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
    const user = { _id: newUser._id, name: newUser.name };
    res.status(201).json({ success: true, user });
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
  user = extend(user, userUpdates);
  user = await user.save();
  user.password = undefined;
  res.json({ success: true, user });
};

module.exports = {
  getUsers,
  addUser,
  findUser,
  findUserById,
  getUserById,
  updateUser,
};
