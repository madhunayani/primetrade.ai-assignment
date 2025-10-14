// backend/src/controllers/taskController.js

const Task = require('../models/Task');
const User = require('../models/User');

/**
 * @desc    Create a new task
 * @route   POST /api/v1/tasks
 * @access  Private (User, Admin)
 */
const createTask = async (req, res, next) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    // Create task with logged-in user's ID
    const task = await Task.create({
      title,
      description,
      status: status || 'Pending',
      priority: priority || 'Medium',
      dueDate,
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: { task }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all tasks
 * @route   GET /api/v1/tasks
 * @access  Private (User sees own, Admin sees all)
 */
const getAllTasks = async (req, res, next) => {
  try {
    let tasks;

    // If Admin, get all tasks; if User, get only their tasks
    if (req.user.role === 'Admin') {
      tasks = await Task.findAll({
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['id', 'username', 'email', 'role']
          }
        ],
        order: [['createdAt', 'DESC']]
      });
    } else {
      tasks = await Task.findAll({
        where: { userId: req.user.id },
        order: [['createdAt', 'DESC']]
      });
    }

    res.status(200).json({
      success: true,
      count: tasks.length,
      data: { tasks }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single task by ID
 * @route   GET /api/v1/tasks/:id
 * @access  Private (User sees own, Admin sees all)
 */
const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByPk(id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'email', 'role']
        }
      ]
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    // Check authorization: User can only see their own tasks
    if (req.user.role !== 'Admin' && task.userId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this task'
      });
    }

    res.status(200).json({
      success: true,
      data: { task }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update task
 * @route   PUT /api/v1/tasks/:id
 * @access  Private (User updates own, Admin updates all)
 */
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority, dueDate } = req.body;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    // Check authorization: User can only update their own tasks
    if (req.user.role !== 'Admin' && task.userId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this task'
      });
    }

    // Update task
    await task.update({
      title: title || task.title,
      description: description !== undefined ? description : task.description,
      status: status || task.status,
      priority: priority || task.priority,
      dueDate: dueDate !== undefined ? dueDate : task.dueDate
    });

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: { task }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete task
 * @route   DELETE /api/v1/tasks/:id
 * @access  Private (Admin only)
 */
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    // Only Admin can delete tasks
    if (req.user.role !== 'Admin') {
      return res.status(403).json({
        success: false,
        message: 'Only Admins can delete tasks'
      });
    }

    await task.destroy();

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
};
