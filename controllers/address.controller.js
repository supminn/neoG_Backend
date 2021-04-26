const User = require("../models/user.model");
const Address = require("../models/adress.model");
const { extend, concat, add } = require("lodash");

const getAddresses = async (req, res) => {
  const address = await Address.find({});
  res.json({ success: true, address });
};

const findUserAddress = async (req, res, next, userId) => {
  try {
    let user = await User.findOne({ _id: userId });
    if (!user) {
      res.status(404).json({
        success: false,
        message: "Invalid user! Kindly register to continue",
      });
      throw Error("Invalid User");
    }
    let address = await Address.findOne({ userId });

    if (!address) {
      address = new Address({ userId, addresses: [] });
      address - (await address.save());
    }
    req.address = address;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to retrive address details",
      errorMessage: error.message,
    });
  }
};

const getUserAddressList = async (address) => {
  let addressList = address.addresses.filter((addr) => addr.active);
  addressList = addressList.map((addr) => {
    addr.active = undefined;
    addr.createdAt = undefined;
    addr.updatedAt = undefined;
    return addr;
  });
  return addressList;
};

const getUserAddress = async (req, res) => {
  try {
    let { address } = req;
    let addressList = await getUserAddressList(address);
    res.json({ success: true, address: addressList });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to retrive the address details",
      errMessage: err.message,
    });
  }
};

const updateUserAddress = async (req, res) => {
  const addressUpdates = req.body;
  let { address } = req;
  let resStatus;
  if (addressUpdates._id) {
    resStatus = 200;
    for (let addr of address.addresses) {
      if (addr._id == addressUpdates._id) {
        addr = extend(addr, addressUpdates);
        addr.active = true;
        break;
      }
    }
  } else {
    resStatus = 201;
    address = extend(address, {
      addresses: concat(address.addresses, { ...addressUpdates, active: true }),
    });
  }

  let updatedAddress = await address.save();
  let addressList = await getUserAddressList(address);
  res.status(resStatus).json({ success: true, address: addressList });
};

const removeUserAddress = async (req, res) => {
  const { _id } = req.body;
  let { address } = req;
  for (let addr of address.addresses) {
    if (addr._id == _id) {
      addr.active = false;
      break;
    }
  }
  let updatedAddress = await address.save();
  let addressList = await getUserAddressList(address);
  res.json({ success: true, address: addressList });
};

module.exports = {
  getAddresses,
  findUserAddress,
  getUserAddress,
  updateUserAddress,
  removeUserAddress,
};
