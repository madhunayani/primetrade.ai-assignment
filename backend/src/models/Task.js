// backend/src/models/Task.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Title is required'
      },
      notEmpty: {
        msg: 'Title cannot be empty'
      },
      len: {
        args: [3, 200],
        msg: 'Title must be between 3 and 200 characters'
      }
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('Pending', 'In Progress', 'Completed'),
    defaultValue: 'Pending',
    allowNull: false,
    validate: {
      isIn: {
        args: [['Pending', 'In Progress', 'Completed']],
        msg: 'Status must be Pending, In Progress, or Completed'
      }
    }
  },
  priority: {
    type: DataTypes.ENUM('Low', 'Medium', 'High'),
    defaultValue: 'Medium',
    allowNull: false,
    validate: {
      isIn: {
        args: [['Low', 'Medium', 'High']],
        msg: 'Priority must be Low, Medium, or High'
      }
    }
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    validate: {
      isDate: {
        msg: 'Please provide a valid date'
      }
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
}, {
  tableName: 'tasks',
  timestamps: true
});

module.exports = Task;
