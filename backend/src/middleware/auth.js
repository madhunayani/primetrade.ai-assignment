// backend/src/middleware/auth.js

const { verifyToken } = require('../utils/jwt');
const User = require('../models/User');

/**
 * Middleware to protect routes - verify JWT token
 */
const protect = async (req, res, next) => {
  let token;

  // Check if token exists in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Check if token doesn't exist
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route. Please login.'
    });
  }

  try {
    // Verify token
    const decoded = verifyToken(token);

    // Find user by id from token payload
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found. Token is invalid.'
      });
    }

    // Attach user to request object (without password)
    req.user = user.toJSON();
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized. Token verification failed.',
      error: error.message
    });
  }
};

/**
 * Middleware to restrict access to specific roles
 * @param  {...String} roles - Allowed roles (e.g., 'Admin', 'User')
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access denied. User role '${req.user.role}' is not authorized to access this route.`
      });
    }

    next();
  };
};

module.exports = {
  protect,
  authorize
};
