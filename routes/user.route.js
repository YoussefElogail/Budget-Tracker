const { Router } = require("express");

const {
  createUser,
  getAllUsers,
  findUser,
  updateUser,
  addPhone,
  deleteUser,
  addAddress,
  deletePhone,
  deleteAddress,
} = require("../controllers/user.controller");
const {
  createUserValidator,
  updateUserValidator,
  showUserValidator,
  deleteUserValidator,
} = require("../util/validators/user.validator");
const walletRouter = require("./wallet.route");
const { protect, allowedTo } = require("../controllers/auth.controller");

const router = Router();

router.use("/:id/wallets", walletRouter);

router
  .route("/")
  .post(protect, allowedTo("admin"), createUserValidator, createUser)
  .get(protect, allowedTo("admin"), getAllUsers);

router
  .route("/:id/phone")
  .post(protect, allowedTo("user"), addPhone)
  .delete(protect, allowedTo("user"), deletePhone);
router
  .route("/:id/address")
  .post(protect, allowedTo("user"), addAddress)
  .delete(protect, allowedTo("user"), deleteAddress);

router
  .route("/:id")
  .get(protect, allowedTo("admin"), showUserValidator, findUser)
  .put(protect, allowedTo("admin"), updateUserValidator, updateUser)
  .delete(protect, allowedTo("admin"), deleteUserValidator, deleteUser);

module.exports = router;
