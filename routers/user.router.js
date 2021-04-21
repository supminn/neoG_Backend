const express = require('express');
const router = express.Router();
const {getUsers, addUser, findUser,findUserById, getUserById, updateUser} = require("../controllers/user.controller");

router.route("/")
.get(getUsers);

router.route("/login")
.post(findUser)

router.route("/signup")
.post(addUser);

router.param("userId",findUserById);

router.route("/:userId")
.get(getUserById)
.post(updateUser)

module.exports = router;
