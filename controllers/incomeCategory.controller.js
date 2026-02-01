const asyncHandler = require("express-async-handler");

const IncomeCategory = require("../models/incomeCategory.model");
const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("./handlersFactory.controller");

// Create a new income category
const createIncomeCategory = createOne(IncomeCategory, "income category");

// find all income categories
const getAllIncomeCategories = getAll(IncomeCategory);

//  find one income category
const findIncomeCategory = getOne(IncomeCategory);

// update income category
const updateIncomeCategory = updateOne(IncomeCategory, "income category");

//  delete one income category
const deleteIncomeCategory = deleteOne(IncomeCategory, "income category");

module.exports = {
  createIncomeCategory,
  getAllIncomeCategories,
  findIncomeCategory,
  updateIncomeCategory,
  deleteIncomeCategory,
};
