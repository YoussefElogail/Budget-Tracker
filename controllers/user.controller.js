const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");
const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("./handlersFactory.controller");
const ApiError = require("../util/ApiError");
const { STATUS, STATUS_CODE } = require("../util/constants");

const addNewItem = async (req, res, next, item, itemMsg) => {
  console.log(req.params.id, item);
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      $addToSet: item,
    },
    { new: true },
  );
  if (!user) return next(new ApiError("User not found", 404));
  res.status(STATUS_CODE.CREATED).json({
    data: user,
    message: `${itemMsg} added successfully`,
    status: STATUS.SUCCESS,
  });
};

// Create a new user
const createUser = createOne(User, "user");

// find all users
const getAllUsers = getAll(User);

//  fine one user
// const fineUser = getOne(User);
const fineUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).populate({
    path: "wallets",
    select: "name balance -user",
  });

  if (!user) return next(new ApiError("User not found", 404));

  res.status(200).json({ data: user });
});

// update user
const updateUser = updateOne(User, "user");

//  add phone
const addPhone = asyncHandler(async (req, res, next) => {
  addNewItem(
    req,
    res,
    next,
    {
      phone: req.body.phone,
    },
    "phone",
  );
});

const addAddress = asyncHandler(async (req, res, next) => {
  addNewItem(
    req,
    res,
    next,
    {
      address: req.body.address,
    },
    "address",
  );
});

const deletePhone = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      $pull: { phone: req.body.phone },
    },
    { new: true },
  );
  if (!user) return next(new ApiError("User not found", 404));
  res.status(STATUS_CODE.CREATED).json({
    data: user,
    message: "phone deleted successfully",
    status: STATUS.SUCCESS,
  });
});
const deleteAddress = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      $pull: { address: req.body.address },
    },
    { new: true },
  );
  if (!user) return next(new ApiError("User not found", 404));
  res.status(STATUS_CODE.CREATED).json({
    data: user,
    message: "address deleted successfully",
    status: STATUS.SUCCESS,
  });
});

//  delete one user
const deleteUser = deleteOne(User, "user");

module.exports = {
  createUser,
  getAllUsers,
  fineUser,
  updateUser,
  addPhone,
  addAddress,
  deleteUser,
  deletePhone,
  deleteAddress,
};
