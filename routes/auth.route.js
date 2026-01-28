const { Router } = require("express");

const {
  signin,
  register,
  getMe,
  protect,
  getMyWallets,
} = require("../controllers/auth.controller");
const {
  signinValidator,
  registerValidator,
} = require("../util/validators/auth.validator");

const router = Router();

router.post("/signin", signinValidator, signin);
router.post("/register", registerValidator, register);
router.get("/get-me", protect, getMe);
router.get("/get-my-wallets", protect, getMyWallets);

module.exports = router;
