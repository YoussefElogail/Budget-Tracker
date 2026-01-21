const mongoose = require("mongoose");

const expenseCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: [50, "Name cannot exceed 50 characters"],
      minLength: [2, "Name should have more than 2 characters"],
    },
  },
  {
    timestamps: true,
  },
);

const ExpenseCategory = mongoose.model(
  "ExpenseCategory",
  expenseCategorySchema,
);

module.exports = ExpenseCategory;
