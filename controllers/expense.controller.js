const asyncHandler = require("express-async-handler");

const Expense = require("../models/expense.model");
const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("./handlersFactory.controller");

const addUserToExpense = asyncHandler(async (req, res, next) => {
  if (!req.body.user) {
    req.body.user = req.user._id;
  }
  next();
});

// Create a new expense
const createExpense = createOne(Expense, "expense");

// get all expenses
const getAllExpenses = getAll(Expense);

//  find one expense
const findExpense = getOne(Expense);

// update expense
const updateExpense = updateOne(Expense, "expense");

//  delete one expense
const deleteExpense = deleteOne(Expense, "expense");

module.exports = {
  addUserToExpense,
  createExpense,
  getAllExpenses,
  findExpense,
  updateExpense,
  deleteExpense,
};
