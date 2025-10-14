// backend/src/routes/index.js

const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoutes');

// Mount routes
router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);

// Health check for API v1
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Primetrade.ai API v1',
    version: '1.0.0',
    endpoints: {
      auth: {
        register: 'POST /api/v1/auth/register',
        login: 'POST /api/v1/auth/login',
        getMe: 'GET /api/v1/auth/me (Protected)'
      },
      tasks: {
        create: 'POST /api/v1/tasks (Protected)',
        getAll: 'GET /api/v1/tasks (Protected)',
        getById: 'GET /api/v1/tasks/:id (Protected)',
        update: 'PUT /api/v1/tasks/:id (Protected)',
        delete: 'DELETE /api/v1/tasks/:id (Admin Only)'
      }
    }
  });
});

module.exports = router;
