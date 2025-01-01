# Employee Management System (EMS)

A full-stack web application for managing employee tasks and administrative operations. The system features role-based authentication, task management, and real-time status tracking.

## 🚀 Features

### Authentication
- User registration with role selection (Admin/Employee)
- Secure login with JWT authentication
- Role-based access control

### Admin Dashboard
- Create and assign tasks to employees
- View all employees and their task statistics
- Monitor task completion rates
- Real-time task status updates

### Employee Dashboard
- View assigned tasks
- Update task status (Complete/Failed)
- Track personal task statistics
- Real-time task count updates

## 🛠️ Tech Stack

### Frontend (ems)
- React.js with Vite
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls
- JWT for authentication

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- CORS for cross-origin requests

## 📦 Installation

### Backend Setup
 - bash
 - cd Backend
 - npm init -y
  
Create a `.env` file in the Backend directory with:
  - MONGO_URI=your_mongodb_connection_string
  - JWT_SECRET=your_jwt_secret
  - PORT=4000


### Frontend Setup
  - bash
  - cd ems
  - npm install


## 🚀 Running the Application

### Backend
  - bash
  - cd Backend
  - node index.js

### Frontend
  - bash
  - cd ems
  - npm run dev



## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/admin` - Admin protected route
- `GET /api/auth/user` - User protected route

### Tasks
- `POST /api/auth/user/assigne` - Create new task
- `PATCH /api/auth/user/updateTaskStatus/:taskId` - Update task status
- `GET /api/auth/user/AllEmployees` - Get all employees and their tasks

## 🔐 Authentication

The system uses JWT (JSON Web Tokens) for authentication. Tokens are stored in localStorage and included in the Authorization header for protected routes.

## 📊 Database Schema

### User Model
- name (String, required)
- email (String, required, unique)
- password (String, required)
- role (String, enum: ["user", "admin"])

### Employee Model
- firstName (String, required)
- lastName (String)
- email (String, required, unique)
- userId (ObjectId, ref: "User")
- tasks (Array of ObjectId, ref: "Task")
- taskCounts (Object containing task statistics)

### Task Model
- active (Boolean)
- newTask (Boolean)
- completed (Boolean)
- failed (Boolean)
- taskTitle (String, required)
- taskDescription (String, required)
- taskDate (Date, required)
- category (String, required)
- assignee (ObjectId, ref: "Employee")

## 👥 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)
