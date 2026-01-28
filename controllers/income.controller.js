const asyncHandler = require("express-async-handler");

const Income = require("../models/income.model");
const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("./handlersFactory.controller");

const addUserToIncome = asyncHandler(async (req, res, next) => {
  if (!req.body.user) {
    req.body.user = req.user._id;
  }
  next();
});

// Create a new income
const createIncome = createOne(Income, "income");

// find all incomes
const getAllIncomes = getAll(Income);

//  fined one income
const finedIncome = getOne(Income);

// update income
const updateIncome = updateOne(Income, "income");

//  delete one income
const deleteIncome = deleteOne(Income, "income");

module.exports = {
  addUserToIncome,
  createIncome,
  getAllIncomes,
  finedIncome,
  updateIncome,
  deleteIncome,
};
