const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({success:false, errorMessage:"Unauthorized. Token not passed."});
    }
    const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({_id: decodedValue._id});
    if(!user){
        return res.status(401).json({success:false, errorMessage:"Unauthorized. Either user is not registered or Token is invalid."});
    }
    user.__v = undefined;
    user.password = undefined;
    req.user = user;
    next();

}

module.exports = authenticate;