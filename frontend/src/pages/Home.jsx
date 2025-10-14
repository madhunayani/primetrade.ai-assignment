// frontend/src/pages/Home.jsx

import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Home.css';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Primetrade.ai</h1>
        <p className="home-subtitle">
          Scalable REST API with Authentication & Role-Based Access Control
        </p>
        <p className="home-description">
          A full-stack MERN application with JWT authentication, role-based permissions,
          and complete task management functionality.
        </p>

        <div className="home-features">
          <div className="feature-card">
            <span className="feature-icon">🔐</span>
            <h3>Secure Authentication</h3>
            <p>JWT-based auth with password hashing</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h3>Role-Based Access</h3>
            <p>User and Admin roles with permissions</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📋</span>
            <h3>Task Management</h3>
            <p>Full CRUD operations for tasks</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📚</span>
            <h3>API Documentation</h3>
            <p>Interactive Swagger documentation</p>
          </div>
        </div>

        <div className="home-actions">
          {isAuthenticated ? (
            <Link to="/dashboard" className="btn-home btn-primary">
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn-home btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn-home btn-secondary">
                Register
              </Link>
            </>
          )}
        </div>

        <div className="home-links">
          <a
            href="http://localhost:5000/api/v1/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link"
          >
            📖 View API Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
