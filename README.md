# MERN Stack RBAC (Role-Based Access Control) System

## Overview
A complete Role-Based Access Control system built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The system provides user authentication, authorization, and role management features.

## Features

### Authentication
- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Account lockout after failed attempts
- Session management

### Authorization
- Role-based access control
- Permission management
- Protected routes
- Role hierarchy (Admin, Manager, User)

### User Management
- User profile management
- Role assignment
- Account status tracking
- Login attempt monitoring

## Tech Stack
- MongoDB: Database
- Express.js: Backend framework
- React.js: Frontend library
- Node.js: Runtime environment
- JWT: Authentication
- bcrypt: Password hashing
- Material-UI: UI components

## Installation

1. Clone the repository:
```bash
git clone https://github.com/jatinsri25/mern-rbac.git
cd mern-rbac
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Environment Setup:

Backend (.env):
```env
MONGODB_URI=mongodb://localhost:27017/rbac
JWT_SECRET=your_secret_key
PORT=5000
```

4. Start the application:
```bash
# Start MongoDB
mongod

# Start backend (in backend directory)
npm start

# Start frontend (in frontend directory)
npm start
```

## Project Structure
```
mern-rbac/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── contexts/
    │   ├── pages/
    │   └── App.js
    └── package.json
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - User login
- GET /api/auth/me - Get current user

### Users
- GET /api/users - Get all users (Admin only)
- PUT /api/users/:id - Update user (Admin only)
- DELETE /api/users/:id - Delete user (Admin only)

## Usage

1. Register a new user
2. Login with credentials
3. Access features based on role:
   - Admin: Full access
   - Manager: Limited management access
   - User: Basic access

## Security Features
- Password hashing
- JWT token encryption
- Account lockout
- Role-based route protection
- Input validation
- Error handling

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
Jatin Srivastava - jatinsri25@github.com
Project Link: https://github.com/jatinsri25/mern-rbac
