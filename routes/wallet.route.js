const { Router } = require("express");

const {
  createWallet,
  finedWallet,
  updateWallet,
  deleteWallet,
  getAllWallets,
  addUserToWallet,
  userWallets,
} = require("../controllers/wallet.controller");
const {
  createWalletValidator,
  updateWalletValidator,
  showWalletValidator,
  deleteWalletValidator,
} = require("../util/validators/wallet.validators");
const { protect, allowedTo } = require("../controllers/auth.controller");

const router = Router({ mergeParams: true });

router
  .route("/")
  .post(protect, createWalletValidator, addUserToWallet, createWallet)
  .get(userWallets, getAllWallets);
router
  .route("/:id")
  .get(protect, showWalletValidator, finedWallet)
  .put(protect, updateWalletValidator, updateWallet)
  .delete(protect, deleteWalletValidator, deleteWallet);

module.exports = router;
