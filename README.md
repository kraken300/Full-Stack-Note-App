# Note App 📝

A full-stack, responsive note-taking application using React, MongoDB, and Tailwind CSS, allowing users to create, edit, and organize notes efficiently.

## Features
- **Home Page**: Displays user notes in a grid format with responsive card layouts.
- **Add/Edit Note**: Add new notes or edit existing ones.
- **Delete Note**: Remove notes permanently.
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing.
- **User Authentication**: Register, login, and secure notes with JWT authentication.

## Screenshots

### Home Page
![Home Page](/client/public/screenshots/home-page.png)  
*Home page of note app.*

### Login Page
![Login Page](/client/public/screenshots/login-page.png)  
*User login interface.*

### Register Page
![Register Page](/client/public/screenshots/register-page.png)  
*User registration interface.*

### Note Detail Page
![Note Detail](/client/public/screenshots/note-detail.png)  
*Detailed view of all notes.*

### Dark Mode
![Dark Mode](/client/public/screenshots/dark-mode.png)  
*Dark mode across the app.*

## Installation

1. Clone the repository:
   ```bash
   https://github.com/kraken300/Full-Stack-Note-App.git
   cd Full-Stack-Note-App
   ```

2. Install frontend dependencies and start the app:
   ```bash
   npm install
   npm run dev
   ```

3. Navigate to the `server` folder and install server-side dependencies:
   ```bash
   cd server
   npm install
   npm run server
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser for the frontend and [http://localhost:5000](http://localhost:5000) for the backend.

## Tech Stack
- **Vite** for fast development with **React** & **React Router**
- **Tailwind CSS** for styling
- **MongoDB** for database storage
- **Express.js** for server-side handling and API
- **JWT Authentication** for user security

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Header component with dark mode and navigation
│   ├── NoteForm.jsx         # Form for creating/editing notes
│   ├── NoteList.jsx         # Displays the list of notes
│   ├── ProtectedRoute.jsx   # Route protection for authenticated users
│   └── ThemeToggle.jsx      # Toggle between light and dark themes
├── context/
│   ├── AuthContext.jsx      # Context for user authentication
│   └── NoteContext.jsx      # Context for note management
├── pages/
│   ├── Home.jsx             # Home page showing notes in a grid format
│   ├── Login.jsx            # User login page
│   ├── Notes.jsx            # Main notes page with list and form
│   └── Register.jsx         # User registration page
├── App.jsx                  # Main app file with routing
└── main.jsx                 # React entry point for Vite

server/
├── config/
│   └── db.js                # MongoDB connection configuration
├── controllers/
│   ├── authController.js    # Controller for authentication logic
│   └── noteController.js    # Controller for note CRUD operations
├── models/
│   ├── Note.js              # Mongoose model for notes
│   └── User.js              # Mongoose model for users
├── routes/
│   ├── authRoutes.js        # Routes for user authentication
│   └── noteRoutes.js        # Routes for note CRUD operations
├── middleware/
│   └── authMiddleware.js    # Middleware for protecting routes
└── server.js                # Express server setup and configuration
```

## API Endpoints

- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login and receive JWT
- **GET /api/notes** - Get all notes (authenticated)
- **POST /api/notes** - Add a new note (authenticated)
- **PUT /api/notes/:id** - Update a note by ID (authenticated)
- **DELETE /api/notes/:id** - Delete a note by ID (authenticated)

## Environment Variables

To run the project locally, you'll need to create a `.env` file in the `server` folder with the following variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```
