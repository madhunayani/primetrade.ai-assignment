// backend/src/utils/seedUsers.js

require('dotenv').config();
const { sequelize } = require('../config/database');
const User = require('../models/User');

const seedUsers = async () => {
  try {
    // Connect to database
    await sequelize.authenticate();
    console.log('✅ Database connected');

    // Sync database (force: true will drop existing tables)
    await sequelize.sync({ force: true });
    console.log('✅ Database synced (tables recreated)');

    // Create Admin user
    const admin = await User.create({
      username: 'admin',
      email: 'admin@primetrade.ai',
      password: 'admin123',
      role: 'Admin'
    });
    console.log('✅ Admin user created:', admin.toJSON());

    // Create regular User
    const user = await User.create({
      username: 'testuser',
      email: 'user@primetrade.ai',
      password: 'user123',
      role: 'User'
    });
    console.log('✅ Regular user created:', user.toJSON());

    console.log('\n🎉 Seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error.message);
    process.exit(1);
  }
};

seedUsers();
