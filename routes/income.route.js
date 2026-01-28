const { Router } = require("express");

const {
  createIncome,
  finedIncome,
  updateIncome,
  deleteIncome,
  getAllIncomes,
  addUserToIncome,
} = require("../controllers/income.controller");
const {
  createIncomeValidator,

  updateIncomeValidator,
  showIncomesValidator,
  deleteIncomeValidator,
} = require("../util/validators/incomes.validator");
const { protect, allowedTo } = require("../controllers/auth.controller");

const router = Router();

router
  .route("/")
  .post(
    protect,
    allowedTo("user"),
    createIncomeValidator,
    addUserToIncome,
    createIncome,
  )
  .get(protect, getAllIncomes);
router
  .route("/:id")
  .get(protect, allowedTo("user", "admin"), showIncomesValidator, finedIncome)
  .put(protect, allowedTo("user"), updateIncomeValidator, updateIncome)
  .delete(protect, allowedTo("user"), deleteIncomeValidator, deleteIncome);

module.exports = router;
