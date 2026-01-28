const { Router } = require("express");

const {
  createExpense,
  finedExpense,
  updateExpense,
  deleteExpense,
  getAllExpenses,
  addUserToExpense,
} = require("../controllers/expense.controller");
const {
  createExpenseValidator,

  updateExpenseValidator,
  showExpensesValidator,
  deleteExpenseValidator,
} = require("../util/validators/expenses.validator");
const { protect, allowedTo } = require("../controllers/auth.controller");

const router = Router();

router
  .route("/")
  .post(
    protect,
    allowedTo("user"),
    createExpenseValidator,
    addUserToExpense,
    createExpense,
  )
  .get(protect, getAllExpenses);
router
  .route("/:id")
  .get(protect, allowedTo("user", "admin"), showExpensesValidator, finedExpense)
  .put(protect, allowedTo("user"), updateExpenseValidator, updateExpense)
  .delete(protect, allowedTo("user"), deleteExpenseValidator, deleteExpense);

module.exports = router;
