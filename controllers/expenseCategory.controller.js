const asyncHandler = require("express-async-handler");

const ExpenseCategory = require("../models/expenseCategory.model");
const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("./handlersFactory.controller");

// Create a new expense category
const createExpenseCategory = createOne(ExpenseCategory, "expense category");

// find all expense categories
const getAllExpenseCategories = getAll(ExpenseCategory);

//  fine one expense category
const fineExpenseCategory = getOne(ExpenseCategory);

// update expense category
const updateExpenseCategory = updateOne(ExpenseCategory, "expense category");

//  delete one expense category
const deleteExpenseCategory = deleteOne(ExpenseCategory, "expense category");

module.exports = {
  createExpenseCategory,
  getAllExpenseCategories,
  fineExpenseCategory,
  updateExpenseCategory,
  deleteExpenseCategory,
};
