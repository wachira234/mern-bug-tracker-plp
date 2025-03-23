# Bug Tracker - MERN Stack Application

Bug Tracker is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) to manage software bugs efficiently. It allows users to create, view, and track bugs with a clean frontend interface and a robust backend API. This project demonstrates modern web development practices, including unit and integration testing, MongoDB Atlas for cloud persistence, and a scalable architecture.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create Bugs**: Submit new bugs with a title, description, and status.
- **View Bugs**: Retrieve and display a list of all bugs.
- **Responsive UI**: A simple, user-friendly React frontend.
- **Cloud Database**: Persistent storage with MongoDB Atlas.
- **Testing**: Comprehensive unit and integration tests for both frontend and backend.
- **CORS Support**: Cross-Origin Resource Sharing enabled for frontend-backend communication.

## Tech Stack

- **Frontend**: React, Vite, Jest, React Testing Library
- **Backend**: Node.js, Express.js, Mongoose, Jest, Supertest
- **Database**: MongoDB Atlas (cloud-hosted)
- **Testing Tools**: Jest, Supertest, MongoDB Memory Server
- **Others**: CORS, dotenv (for environment variables)

## Prerequisites

Before setting up the project, ensure you have:

- **Node.js**: Version 20.17.0 or higher (download from nodejs.org).
- **npm**: Comes with Node.js (verify with `npm -v`).
- **MongoDB Atlas Account**: For cloud database access (your URI: `mongodb+srv://washira:washira@mernstackweek6.hda04.mongodb.net/`).
- **Git**: For cloning the repository (optional).
- **Text Editor**: VS Code or similar recommended.

## Installation

### Backend Setup

1. Navigate to Backend Directory:
   ```bash
   cd backend
   ```
2. Install Dependencies:

   ```bash
   npm install
   ```

   Installs express, mongoose, cors, and dev dependencies (jest, supertest, mongodb-memory-server).

3. Set Up Environment Variables (Optional but Recommended):
   Create a `.env` file in `backend/`:
   ```plaintext
   MONGO_URI=mongodb+srv://washira:washira@mernstackweek6.hda04.mongodb.net/bug-tracker?retryWrites=true&w=majority
   PORT=5000
   ```
   Update `server.js` to use dotenv:
   ```javascript
   require("dotenv").config();
   const mongoURI =
     process.env.MONGO_URI ||
     "mongodb+srv://washira:washira@mernstackweek6.hda04.mongodb.net/bug-tracker?retryWrites=true&w=majority";
   const PORT = process.env.PORT || 5000;
   ```

### Frontend Setup

1. Navigate to Frontend Directory:
   ```bash
   cd frontend
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
   Installs React, Vite, Jest, React Testing Library, and other dependencies.

## Running the Application

### Backend

1. Start the Server:

   ```bash
   cd backend
   npm start
   ```

   Output:

   ```plaintext
   > backend@1.0.0 start
   > node server.js

   Server running on port 5000
   Connected to MongoDB Atlas
   ```

   Runs on `http://localhost:5000`.

### Frontend

1. Start the Development Server:
   ```bash
   cd frontend
   npm run dev
   ```
   Opens at `http://localhost:5173` (default Vite port).
   Ensure the backend is running for API connectivity.

## Testing

### Backend Testing

- **Tools**: Jest, Supertest, MongoDB Memory Server.
- **Suites**: 2 (unit tests for validators, integration tests for API).
- **Tests**: 4 total.
- Run Tests:

  ```bash
  cd backend
  npm test
  ```

  Output:

  ```plaintext
  > backend@1.0.0 test
  > jest --verbose

  PASS  tests/validators.test.js
    Validators
      ✓ validates correct bug data (3 ms)
      ✓ rejects invalid bug data (1 ms)

  PASS  tests/app.test.js
    Bug API
      ✓ creates a new bug (58 ms)
      ✓ fetches all bugs (42 ms)

  Test Suites: 2 passed, 2 total
  Tests:       4 passed, 4 total
  Snapshots:   0 total
  Time:        2.345 s
  Ran all test suites.
  ```

### Frontend Testing

- **Tools**: Jest, React Testing Library.
- **Suites**: 2 (unit tests for BugForm, integration tests for App).
- **Tests**: 3 total.
- Run Tests:

  ```bash
  cd frontend
  npm test
  ```

  Output:

  ```plaintext
  > frontend@0.0.0 test
  > jest --verbose

  PASS  src/BugForm.test.js
    BugForm
      ✓ renders form inputs correctly (45 ms)
      ✓ submits form with valid data (52 ms)

  PASS  src/App.test.js
    App Integration
      ✓ creates bug and updates list (65 ms)

  Test Suites: 2 passed, 2 total
  Tests:       3 passed, 3 total
  Snapshots:   0 total
  Time:        2.134 s
  Ran all test suites.
  ```

## Project Structure

```
mern-bug-tracker/
├── backend/
│   ├── models/
│   │   └── Bug.js          # Mongoose model for bugs
│   ├── routes/
│   │   └── bugs.js        # API routes for bug CRUD
│   ├── tests/
│   │   ├── app.test.js    # Integration tests for API
│   │   └── validators.test.js  # Unit tests for validation
│   ├── utils/
│   │   └── validators.js  # Validation helper functions
│   ├── .env               # Environment variables (optional)
│   ├── jest.config.js     # Jest configuration
│   ├── package.json       # Backend dependencies and scripts
│   └── server.js          # Express server setup
├── frontend/
│   ├── src/
│   │   ├── BugForm.jsx    # Bug form component
│   │   ├── App.jsx        # Main app component
│   │   ├── App.test.js    # Integration tests for App
│   │   ├── BugForm.test.js  # Unit tests for BugForm
│   │   └── setupTests.js  # Jest DOM setup
│   ├── jest.config.js     # Jest configuration
│   └── package.json       # Frontend dependencies and scripts
└── README.md              # Project documentation
```

## API Endpoints

| Method | Endpoint | Description       | Request Body           | Response            |
| ------ | -------- | ----------------- | ---------------------- | ------------------- |
| POST   | /bugs    | Create a new bug  | { title, description } | 201: { bug object } |
| GET    | /bugs    | Retrieve all bugs | None                   | 200: [bug objects]  |

**Base URL**: `http://localhost:5000` (local development).  
**Error Handling**: Returns 400 with { message } on invalid requests.

## Troubleshooting

### Backend Issues

- **Port Conflict (EADDRINUSE)**:

  - Check port 5000 usage:
    ```bash
    netstat -aon | findstr :5000
    ```
  - Kill process:
    ```bash
    taskkill /PID <PID> /F.
    ```

- **MongoDB Connection Failure**:

  - Verify MongoDB Atlas URI and whitelist your IP in Atlas Network Access.
  - Check .env setup if using dotenv.

- **Test Failures**:
  - Ensure all files match the structure above.
  - Clear Jest cache:
    ```bash
    npx jest --clearCache.
    ```

### Frontend Issues

- **API Not Responding**:

  - Ensure backend is running (`npm start` in backend/).

- **Test Errors**:
  - Verify `setupTests.js` includes `@testing-library/jest-dom`.

## Security Notes

- **MongoDB Atlas Credentials**: The URI in `server.js` contains sensitive data (washira:washira). Move it to `.env` and update your Atlas password after public exposure.
- **CORS**: Configured to allow all origins (`cors()`). Restrict to specific origins (e.g., `http://localhost:5173`) in production:
  ```javascript
  app.use(cors({ origin: "http://localhost:5173" }));
  ```

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name.
   ```
3. Commit changes:
   ```bash
   git commit -m "Add feature".
   ```
4. Push to branch:
   ```bash
   git push origin feature-name.
   ```
5. Submit a pull request.

## License

This project is licensed under the MIT License. See LICENSE for details.
