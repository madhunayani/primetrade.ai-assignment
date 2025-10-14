// backend/src/models/index.js

const { sequelize } = require('../config/database');
const User = require('./User');
const Task = require('./Task');

// Define associations
User.hasMany(Task, {
  foreignKey: 'userId',
  as: 'tasks',
  onDelete: 'CASCADE'
});

Task.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

const db = {
  sequelize,
  User,
  Task
};

module.exports = db;
