const { Router } = require("express");

const {
  createUser,
  getAllUsers,
  fineUser,
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

const router = Router();

router.use("/:id/wallets", walletRouter);

router.route("/").post(createUserValidator, createUser).get(getAllUsers);
router.route("/:id/phone").post(addPhone).delete(deletePhone);
router.route("/:id/address").post(addAddress).delete(deleteAddress);
router
  .route("/:id")
  .get(showUserValidator, fineUser)
  .put(updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);

module.exports = router;
