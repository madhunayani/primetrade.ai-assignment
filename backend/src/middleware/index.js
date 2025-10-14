// backend/src/middleware/index.js

const { protect, authorize } = require('./auth');
const errorHandler = require('./errorHandler');
const { validate, registerValidation, loginValidation } = require('./validator');

module.exports = {
  protect,
  authorize,
  errorHandler,
  validate,
  registerValidation,
  loginValidation
};
