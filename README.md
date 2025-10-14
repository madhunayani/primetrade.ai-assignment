
***

## 📂 Step 12.1: Create Main Project README

### **CMD Commands:**

```cmd
cd D:\MERN Stack Projects\primetrade-assignment
type nul > README.md
```

Open `README.md` in your code editor and paste this **complete documentation**:

```markdown
# Primetrade.ai Backend Developer Assignment

A full-stack MERN application with JWT authentication, role-based access control, and complete task management functionality.

## 🎯 Project Overview

This project is a scalable REST API built with Node.js (Express) and React.js, featuring:
- Secure user authentication with JWT
- Role-based access control (User & Admin)
- Complete CRUD operations for task management
- RESTful API design with versioning
- Interactive Swagger API documentation
- SQLite database with Sequelize ORM

---

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Authentication Flow](#authentication-flow)
- [Role-Based Permissions](#role-based-permissions)
- [Scalability Strategy](#scalability-strategy)
- [Testing](#testing)
- [Screenshots](#screenshots)

---

## ✨ Features

### Backend Features
- ✅ User registration and login with JWT authentication
- ✅ Password hashing using bcrypt
- ✅ Role-based access control (User & Admin roles)
- ✅ Complete CRUD operations for tasks
- ✅ API versioning (`/api/v1`)
- ✅ Input validation using express-validator
- ✅ Comprehensive error handling
- ✅ Interactive Swagger documentation
- ✅ SQLite database with Sequelize ORM
- ✅ Modular and scalable architecture

### Frontend Features
- ✅ User registration and login pages
- ✅ Protected routes with JWT verification
- ✅ Task dashboard with CRUD operations
- ✅ Role-based UI (Admin can delete, User cannot)
- ✅ Real-time success/error notifications
- ✅ Responsive design
- ✅ Clean and modern UI

---

## 🛠️ Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** SQLite
- **ORM:** Sequelize
- **Authentication:** JSON Web Tokens (JWT)
- **Password Hashing:** bcryptjs
- **Validation:** express-validator
- **API Documentation:** Swagger (swagger-jsdoc, swagger-ui-express)
- **CORS:** cors

### Frontend
- **Framework:** React.js (Vite)
- **HTTP Client:** Axios
- **Routing:** React Router DOM v6
- **State Management:** Context API
- **Styling:** Custom CSS

---

## 📁 Project Structure

```
primetrade-assignment/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js          # Database configuration
│   │   │   └── swagger.js           # Swagger configuration
│   │   ├── controllers/
│   │   │   ├── authController.js    # Authentication logic
│   │   │   └── taskController.js    # Task CRUD logic
│   │   ├── middleware/
│   │   │   ├── auth.js              # JWT verification & authorization
│   │   │   ├── errorHandler.js      # Global error handler
│   │   │   ├── validator.js         # Input validation rules
│   │   │   └── index.js             # Middleware exports
│   │   ├── models/
│   │   │   ├── User.js              # User model with Sequelize
│   │   │   ├── Task.js              # Task model with Sequelize
│   │   │   └── index.js             # Model associations
│   │   ├── routes/
│   │   │   ├── authRoutes.js        # Authentication routes
│   │   │   ├── taskRoutes.js        # Task routes
│   │   │   └── index.js             # Route aggregation
│   │   ├── utils/
│   │   │   ├── jwt.js               # JWT utilities
│   │   │   └── seedUsers.js         # Database seeding script
│   │   └── index.js                 # Main server file
│   ├── database/
│   │   └── primetrade.db            # SQLite database file
│   ├── .env                         # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── common/
    │   │   │   ├── Navbar.jsx
    │   │   │   └── ProtectedRoute.jsx
    │   │   └── tasks/
    │   │       ├── TaskList.jsx
    │   │       ├── TaskCard.jsx
    │   │       └── TaskForm.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx      # Authentication context
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Dashboard.jsx
    │   ├── services/
    │   │   └── api.js               # Axios configuration
    │   ├── styles/
    │   │   ├── Auth.css
    │   │   ├── Dashboard.css
    │   │   ├── Home.css
    │   │   ├── Navbar.css
    │   │   └── Tasks.css
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .gitignore
    ├── package.json
    └── README.md
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- Git (optional, for version control)

### Backend Setup

1. **Navigate to backend directory**
   ```
   cd backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Create .env file**
   
   Create a `.env` file in the `backend` directory with the following content:
   ```
   PORT=5000
   NODE_ENV=development
   DB_NAME=primetrade_db
   DB_DIALECT=sqlite
   DB_STORAGE=./database/primetrade.db
   JWT_SECRET=your_super_secure_jwt_secret_key_change_this_in_production
   JWT_EXPIRE=24h
   CLIENT_URL=http://localhost:5173
   ```

4. **Run database seed (Optional)**
   ```
   node src/utils/seedUsers.js
   ```
   This creates default users:
   - Admin: `admin@primetrade.ai` / `admin123`
   - User: `user@primetrade.ai` / `user123`

5. **Start the backend server**
   ```
   npm run dev
   ```
   Server will run on `http://localhost:5000`

6. **Access API Documentation**
   
   Visit `http://localhost:5000/api/v1/docs` for interactive Swagger documentation

### Frontend Setup

1. **Navigate to frontend directory**
   ```
   cd frontend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Start the development server**
   ```
   npm run dev
   ```
   Application will run on `http://localhost:5173`

4. **Access the application**
   
   Open your browser and visit `http://localhost:5173`

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Authentication Endpoints

#### Register User
```
POST /api/v1/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "role": "User"
}
```

#### Login User
```
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```
GET /api/v1/auth/me
Authorization: Bearer <token>
```

### Task Endpoints (Protected)

#### Create Task
```
POST /api/v1/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete documentation",
  "description": "Write comprehensive README",
  "status": "In Progress",
  "priority": "High",
  "dueDate": "2025-10-20"
}
```

#### Get All Tasks
```
GET /api/v1/tasks
Authorization: Bearer <token>
```
- **User:** Returns only their own tasks
- **Admin:** Returns all tasks from all users

#### Get Task by ID
```
GET /api/v1/tasks/:id
Authorization: Bearer <token>
```

#### Update Task
```
PUT /api/v1/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "Completed",
  "priority": "Medium"
}
```

#### Delete Task (Admin Only)
```
DELETE /api/v1/tasks/:id
Authorization: Bearer <token>
```

### Interactive Documentation
Visit `http://localhost:5000/api/v1/docs` for complete interactive Swagger documentation with:
- Request/response examples
- Schema definitions
- Try-it-out functionality
- Authentication support

---

## 🗄️ Database Schema

### Users Table
```
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('User', 'Admin') DEFAULT 'User',
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);
```

### Tasks Table
```
CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  status ENUM('Pending', 'In Progress', 'Completed') DEFAULT 'Pending',
  priority ENUM('Low', 'Medium', 'High') DEFAULT 'Medium',
  dueDate DATE,
  userId INTEGER NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);
```

### Relationships
- **One-to-Many:** One User can have many Tasks
- **Foreign Key:** `tasks.userId` references `users.id`
- **Cascade Delete:** When a user is deleted, their tasks are also deleted

---

## 🔐 Authentication Flow

1. **User Registration**
   - User submits registration form
   - Backend validates input data
   - Password is hashed using bcrypt
   - User is created in database
   - JWT token is generated and returned

2. **User Login**
   - User submits credentials
   - Backend verifies email exists
   - Password is compared using bcrypt
   - JWT token is generated and returned

3. **Protected Routes**
   - Client sends JWT token in Authorization header
   - Backend verifies token using middleware
   - User information is attached to request
   - Route handler processes request

4. **Token Storage**
   - Frontend stores JWT in localStorage
   - Axios interceptor automatically adds token to requests
   - Token is cleared on logout

---

## 👥 Role-Based Permissions

### User Role
- ✅ Register and login
- ✅ Create tasks
- ✅ View own tasks only
- ✅ Update own tasks only
- ❌ Cannot delete tasks
- ❌ Cannot view other users' tasks

### Admin Role
- ✅ Register and login
- ✅ Create tasks
- ✅ View ALL tasks (including user information)
- ✅ Update ANY task
- ✅ Delete ANY task
- ✅ Full administrative access

---

## 📈 Scalability Strategy

### Current Architecture
The project follows a modular, scalable architecture that can be easily extended:

1. **Modular Code Structure**
   - Controllers handle business logic
   - Models define data structure
   - Routes handle HTTP requests
   - Middleware handles cross-cutting concerns
   - Easy to add new modules without affecting existing code

2. **API Versioning**
   - All endpoints use `/api/v1` prefix
   - Future versions can coexist (`/api/v2`)
   - Backward compatibility maintained

3. **Stateless Authentication**
   - JWT tokens enable horizontal scaling
   - No session storage on server
   - Easy to load balance across multiple servers

### Scalability Strategies for Production

#### 1. Database Scalability
- **Current:** SQLite (suitable for development)
- **Production:**
  - Migrate to PostgreSQL/MySQL for better concurrency
  - Implement database connection pooling
  - Add read replicas for read-heavy operations
  - Implement caching layer (Redis) for frequently accessed data

#### 2. Horizontal Scaling
- Deploy multiple backend instances
- Use load balancer (Nginx/HAProxy) to distribute traffic
- Implement health checks for instance monitoring
- Use Docker containers for consistent deployments

#### 3. Caching Strategy
- Implement Redis for:
  - Session management
  - Frequently accessed task lists
  - User profile data
  - API response caching
- Set appropriate TTL (Time To Live) for cache entries
- Implement cache invalidation on updates

#### 4. Microservices Architecture
```
Current Monolith → Future Microservices

┌─────────────────┐     ┌──────────────────┐
│   Auth Service  │     │  Task Service    │
│   (Port 5001)   │     │  (Port 5002)     │
└────────┬────────┘     └────────┬─────────┘
         │                       │
         └───────────┬───────────┘
                     │
            ┌────────▼────────┐
            │  API Gateway    │
            │  (Port 5000)    │
            └─────────────────┘
```

Benefits:
- Independent scaling of services
- Technology flexibility per service
- Isolated failures
- Easier maintenance and updates

#### 5. Database Optimization
- Add indexes on frequently queried columns:
  ```
  CREATE INDEX idx_tasks_userId ON tasks(userId);
  CREATE INDEX idx_tasks_status ON tasks(status);
  CREATE INDEX idx_users_email ON users(email);
  ```
- Implement pagination for large datasets
- Use eager loading to reduce N+1 queries
- Optimize complex queries with query optimization tools

#### 6. CDN and Static Asset Optimization
- Serve frontend assets through CDN (CloudFlare/AWS CloudFront)
- Implement lazy loading for components
- Minify and compress JavaScript/CSS files
- Use image optimization techniques

#### 7. Monitoring and Logging
- Implement structured logging (Winston/Morgan)
- Set up application monitoring (New Relic/Datadog)
- Track key metrics:
  - Response times
  - Error rates
  - Database query performance
  - CPU/Memory usage
- Set up alerts for anomalies

#### 8. Security Enhancements
- Rate limiting to prevent abuse
- Input sanitization and XSS protection
- CSRF protection for state-changing operations
- Regular security audits
- Implement API key authentication for third-party integrations

#### 9. Message Queue for Async Operations
- Implement RabbitMQ/AWS SQS for:
  - Email notifications
  - Report generation
  - Background task processing
- Decouple time-consuming operations

#### 10. CI/CD Pipeline
```
GitHub → Jenkins/GitHub Actions → Docker Build → 
  → Automated Tests → Staging Deploy → Production Deploy
```

---

## 🧪 Testing

### Manual Testing Steps

1. **Registration**
   - Register as User
   - Register as Admin
   - Try duplicate email (should fail)

2. **Login**
   - Login with valid credentials
   - Login with invalid credentials (should fail)

3. **Task Operations (User)**
   - Create new task
   - View task list (only own tasks visible)
   - Edit own task
   - Try to delete task (should be forbidden)

4. **Task Operations (Admin)**
   - Create new task
   - View all tasks (from all users)
   - Edit any task
   - Delete any task

5. **Protected Routes**
   - Try accessing `/dashboard` without login (should redirect)
   - Logout and verify token is cleared

### API Testing with Swagger
1. Visit `http://localhost:5000/api/v1/docs`
2. Test `/auth/register` endpoint
3. Test `/auth/login` and copy the token
4. Click "Authorize" button and paste token
5. Test all task endpoints

---

## 📸 Screenshots

### Home Page
Landing page with feature overview and navigation.

### Registration Page
User registration form with role selection (User/Admin).

### Login Page
Secure login with email and password.

### Dashboard
Task management interface with create, edit, and view functionality.

### Task List
Grid view of tasks with status and priority indicators.

### Task Form
Modal form for creating and editing tasks.

### Swagger Documentation
Interactive API documentation at `/api/v1/docs`.

---

## 🤝 Submission Details

### Repository Information
- **GitHub:** [Your Repository URL]
- **Branch:** main
- **Access:** Public

### API Documentation
- **Swagger UI:** http://localhost:5000/api/v1/docs
- **Postman Collection:** [Included in repository]

### Contact Information
- **Name:** [Your Name]
- **Email:** [Your Email]
- **LinkedIn:** [Your LinkedIn]
- **Portfolio:** [Your Portfolio]

---

## 📝 Assignment Compliance

✅ **Backend Requirements:**
- User Registration & Login APIs with bcrypt hashing
- JWT-based authentication
- Role-Based Access (User & Admin)
- CRUD APIs for Tasks entity
- API Versioning (`/api/v1`)
- Error Handling & Validation (express-validator)
- API Documentation (Swagger)
- SQLite Database (Sequelize ORM)
- Security (JWT, input validation, password hashing)
- Scalable Architecture (modular structure)

✅ **Frontend Requirements:**
- React.js application
- Registration and Login pages
- Protected dashboard with JWT
- CRUD operations for tasks
- Success/error message display
- Clean and functional UI

✅ **Deliverables:**
- GitHub Repository with clear README
- API Documentation (Swagger)
- Scalability Strategy (documented above)
- Complete project with backend and frontend

---

## 🙏 Acknowledgments

This project was built as part of the Primetrade.ai Backend Developer (Intern) Assignment through NxtWave.

---

## 📧 Contact

For any queries regarding this project, please contact:
- **Email:** [Your Email]
- **GitHub:** [Your GitHub Profile]

---

**Built with ❤️ for Primetrade.ai**
```

***

