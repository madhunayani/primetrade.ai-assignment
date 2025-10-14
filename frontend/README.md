# 📄 FILE 3: Frontend README.md


***

```markdown
# Primetrade.ai Frontend

React.js application with authentication and task management.

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- npm v7+
- Backend API running on `http://localhost:5000`

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Start development server:
   ```
   npm run dev
   ```

Application runs on `http://localhost:5173`

## 🎨 Features

- User authentication (register/login)
- Protected routes with JWT
- Task management dashboard
- Create, read, update tasks
- Admin can delete tasks
- Real-time success/error notifications
- Responsive design

## 🛠️ Tech Stack

- **Framework:** React.js (Vite)
- **Routing:** React Router DOM v6
- **HTTP Client:** Axios
- **State Management:** Context API
- **Styling:** Custom CSS

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/      # Shared components
│   │   └── tasks/       # Task-related components
│   ├── context/         # React Context (Auth)
│   ├── pages/           # Page components
│   ├── services/        # API calls
│   ├── styles/          # CSS files
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
└── package.json
```

## 🔗 Routes

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Home page | Public |
| `/login` | Login page | Public |
| `/register` | Registration page | Public |
| `/dashboard` | Task dashboard | Protected |

## 🔐 Authentication

- JWT tokens stored in localStorage
- Axios interceptors add token to requests
- Protected routes redirect to login
- Auto-logout on token expiration

## 🎨 Pages

### Home
Landing page with features overview

### Register
Create account with role selection (User/Admin)

### Login
Authenticate with email and password

### Dashboard
- View tasks (User: own only, Admin: all)
- Create new tasks
- Edit existing tasks
- Delete tasks (Admin only)

## 📝 Environment Configuration

Backend API URL is configured in `src/services/api.js`:
```
const API_BASE_URL = 'http://localhost:5000/api/v1';
```

Change this for production deployment.

## 🚀 Build for Production

```
npm run build
```

Build output in `dist/` directory.

## 🧪 Testing

Manual testing checklist:
- [ ] Register new user
- [ ] Login with credentials
- [ ] Create task
- [ ] Edit task
- [ ] View task list
- [ ] Delete task (Admin)
- [ ] Logout
- [ ] Protected route redirect
```

***
