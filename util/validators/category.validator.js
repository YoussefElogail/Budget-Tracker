const { check } = require("express-validator");
const ApiError = require("../ApiError");
const validatorMiddleware = require("../../middleware/validatorMiddleware");

const createCategoryValidator = (Model, modelName) => [
  check("name")
    .notEmpty()
    .withMessage(`${modelName} is required`)
    .isString()
    .withMessage(`${modelName} mast be string`)
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage(`${modelName} must be min 2 chr and max 50 chr`)
    .bail()
    .custom(async (value, { req }) => {
      const item = await Model.findOne({ name: value });
      if (item) {
        throw new ApiError(`${modelName} is exists`, 400);
      }
      return true;
    }),
  validatorMiddleware,
];

const UpdateCategoryValidator = (Model, modelName) => [
  check("id").isMongoId().withMessage(`${modelName} not valid mongo id `),
  check("name")
    .optional()
    .isString()
    .withMessage(`${modelName} mast be string`)
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage(`${modelName} must be min 2 chr and max 50 chr`)
    .bail()
    .custom(async (value, { req }) => {
      const currentItem = await Model.findOne({ _id: req.params.id });
      if (!currentItem) {
        throw new ApiError(`${modelName} is not exists`, 404);
      }
      const foundItem = await Model.findOne({ name: value });
      if (foundItem && foundItem._id.toString() != currentItem._id.toString()) {
        throw new ApiError(`${value} is exists`, 400);
      }
      return true;
    }),
  validatorMiddleware,
];

const showCategoryValidator = (Model, modelName) => [
  check("id")
    .isMongoId()
    .withMessage(`${modelName} not valid mongo id `)
    .bail()
    .custom(async (value, { req }) => {
      const item = await Model.findOne({ _id: value });
      if (!item) {
        throw new ApiError(`${modelName} is not exists`, 404);
      }
      return true;
    }),
  validatorMiddleware,
];

const deleteCategoryValidator = (Model, modelName) => [
  check("id")
    .isMongoId()
    .withMessage(`${modelName} not valid mongo id `)
    .bail()
    .custom(async (value, { req }) => {
      const item = await Model.findOne({ _id: value });
      if (!item) {
        throw new ApiError(`${modelName} is not exists`, 404);
      }
      return true;
    }),
  validatorMiddleware,
];

module.exports = {
  createCategoryValidator,
  UpdateCategoryValidator,
  showCategoryValidator,
  deleteCategoryValidator,
};
