# 📄 FILE 2: Backend README.md


```markdown
# Primetrade.ai Backend API

RESTful API with JWT authentication and role-based access control.

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- npm v7+

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Create `.env` file:
   ```
   PORT=5000
   NODE_ENV=development
   DB_NAME=primetrade_db
   DB_DIALECT=sqlite
   DB_STORAGE=./database/primetrade.db
   JWT_SECRET=your_super_secure_jwt_secret_key
   JWT_EXPIRE=24h
   CLIENT_URL=http://localhost:5173
   ```

3. Run database seed (optional):
   ```
   node src/utils/seedUsers.js
   ```

4. Start server:
   ```
   npm run dev
   ```

Server runs on `http://localhost:5000`

## 📚 API Documentation

Interactive Swagger documentation available at:
```
http://localhost:5000/api/v1/docs
```

## 🔗 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/me` - Get current user (Protected)

### Tasks
- `POST /api/v1/tasks` - Create task (Protected)
- `GET /api/v1/tasks` - Get all tasks (Protected)
- `GET /api/v1/tasks/:id` - Get task by ID (Protected)
- `PUT /api/v1/tasks/:id` - Update task (Protected)
- `DELETE /api/v1/tasks/:id` - Delete task (Admin only)

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** SQLite + Sequelize
- **Authentication:** JWT + bcryptjs
- **Validation:** express-validator
- **Documentation:** Swagger

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Business logic
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── index.js         # Entry point
├── database/            # SQLite database
├── .env                 # Environment variables
└── package.json
```

## 🧪 Testing

Test endpoints using:
- Swagger UI: `http://localhost:5000/api/v1/docs`
- Postman
- cURL

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development |
| DB_STORAGE | Database path | ./database/primetrade.db |
| JWT_SECRET | JWT secret key | (required) |
| JWT_EXPIRE | Token expiration | 24h |
| CLIENT_URL | Frontend URL | http://localhost:5173 |

## 🔐 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token authentication
- Input validation and sanitization
- CORS protection
- Error handling middleware
- Role-based authorization

## 📧 Default Users

After running seed script:

| Email | Password | Role |
|-------|----------|------|
| admin@primetrade.ai | admin123 | Admin |
| user@primetrade.ai | user123 | User |
```

***

