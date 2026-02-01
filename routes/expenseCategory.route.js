const { Router } = require("express");

const {
  createExpenseCategory,
  getAllExpenseCategories,
  findExpenseCategory,
  updateExpenseCategory,
  deleteExpenseCategory,
} = require("../controllers/expenseCategory.controller");
const {
  showCategoryValidator,
  UpdateCategoryValidator,
  createCategoryValidator,
  deleteCategoryValidator,
} = require("../util/validators/category.validator");
const ExpenseCategory = require("../models/expenseCategory.model");

const router = Router();

router
  .route("/")
  .post(
    createCategoryValidator(ExpenseCategory, "expense category"),
    createExpenseCategory,
  )
  .get(getAllExpenseCategories);
router
  .route("/:id")
  .get(
    showCategoryValidator(ExpenseCategory, "expense category"),
    findExpenseCategory,
  )
  .put(
    UpdateCategoryValidator(ExpenseCategory, "expense category"),
    updateExpenseCategory,
  )
  .delete(
    deleteCategoryValidator(ExpenseCategory, "expense category"),
    deleteExpenseCategory,
  );

module.exports = router;
