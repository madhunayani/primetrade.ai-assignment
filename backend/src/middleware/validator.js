// backend/src/middleware/validator.js

const { body, validationResult } = require('express-validator');

/**
 * Middleware to handle validation errors
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }
  next();
};

/**
 * Registration validation rules
 */
const registerValidation = [
  body('username')
    .trim()
    .notEmpty().withMessage('Username is required')
    .isLength({ min: 3, max: 50 }).withMessage('Username must be between 3 and 50 characters')
    .matches(/^[a-zA-Z0-9_]+$/).withMessage('Username can only contain letters, numbers and underscores'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  
  body('role')
    .optional()
    .isIn(['User', 'Admin']).withMessage('Role must be either User or Admin')
];

/**
 * Login validation rules
 */
const loginValidation = [
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('password')
    .notEmpty().withMessage('Password is required')
];


/**
 * Task validation rules
 */
const taskValidation = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ min: 3, max: 200 }).withMessage('Title must be between 3 and 200 characters'),
  
  body('description')
    .optional()
    .trim(),
  
  body('status')
    .optional()
    .isIn(['Pending', 'In Progress', 'Completed']).withMessage('Status must be Pending, In Progress, or Completed'),
  
  body('priority')
    .optional()
    .isIn(['Low', 'Medium', 'High']).withMessage('Priority must be Low, Medium, or High'),
  
  body('dueDate')
    .optional()
    .isDate().withMessage('Please provide a valid date (YYYY-MM-DD)')
];


module.exports = {
  validate,
  registerValidation,
  loginValidation,
  taskValidation
};

