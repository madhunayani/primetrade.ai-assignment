// backend/src/routes/taskRoutes.js

const express = require('express');
const router = express.Router();

const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

const { protect, authorize } = require('../middleware/auth');
const { taskValidation, validate } = require('../middleware/validator');

// All routes require authentication
router.use(protect);

/**
 * @route   POST /api/v1/tasks
 * @desc    Create a new task
 * @access  Private (User, Admin)
 */
router.post('/', taskValidation, validate, createTask);

/**
 * @route   GET /api/v1/tasks
 * @desc    Get all tasks (User: own tasks, Admin: all tasks)
 * @access  Private (User, Admin)
 */
router.get('/', getAllTasks);

/**
 * @route   GET /api/v1/tasks/:id
 * @desc    Get single task by ID
 * @access  Private (User: own tasks, Admin: all tasks)
 */
router.get('/:id', getTaskById);

/**
 * @route   PUT /api/v1/tasks/:id
 * @desc    Update task
 * @access  Private (User: own tasks, Admin: all tasks)
 */
router.put('/:id', taskValidation, validate, updateTask);

/**
 * @route   DELETE /api/v1/tasks/:id
 * @desc    Delete task (Admin only)
 * @access  Private (Admin only)
 */
router.delete('/:id', authorize('Admin'), deleteTask);

module.exports = router;
