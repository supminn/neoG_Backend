const express = require("express");
const { route } = require("./category.router");
const router = express.Router();
const {getAddresses, findUserAddress, getUserAddress, updateUserAddress, removeUserAddress} = require("../controllers/address.controller");

router.route("/")
.get(getAddresses);

router.param("userId", findUserAddress);

router.route("/:userId")
.get(getUserAddress)
.post(updateUserAddress)
.delete(removeUserAddress);

module.exports = router;