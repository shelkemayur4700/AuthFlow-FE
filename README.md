# AuthFlow Frontend

This is the frontend application for **AuthFlow**, a user authentication and profile management system built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **React Router**. It supports signup, login, fetching user details, updating user profile, and managing authentication state with Redux.

---

## Features

- **User Authentication**: Signup and login with email and password.
- **Redux State Management**: Stores user data and JWT token.
- **Persistent Login**: Keeps user logged in across page refreshes using Redux.
- **Dashboard**: Display and update user profile (name, email, optional password, phone, and address).
- **Responsive Design**: Dashboard fields are responsive for mobile and desktop.
- **Sidebar Navigation**: Light-mode-only sidebar with navigation links and logged-in user panel including logout.
- **Toasts**: Success and error notifications for user actions.

---

## Technologies Used

- **React** with functional components and hooks
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Axios** for API calls
- **Lucide Icons** for UI icons
- **Sonner** for toast notifications
- **Jest** for unit testing

---

## Getting Started

### 1. Clone the Repository

git clone https://github.com/yourusername/authflow-frontend.git
cd authflow-frontend

### 2. Install Dependencies

npm install

### 3. Configure Environment Variables
Create a .env file in the root directory:
VITE_API_BASE_URL=http://localhost:3000

### 4. Run the Application
npm run dev

### Project Structure

src/
├─ components/ # Reusable UI components
├─ pages/ # Pages: Login, Signup, Dashboard
├─ redux/
│ ├─ slices/ # Redux slices (user slice)
│ ├─ thunk/ # Async thunks for API calls
├─ navigations/ # Private routes & sidebar navigation
├─ utils/ # Helper functions (toast, env utils)
├─ App.jsx # Main app component
├─ main.jsx # Entry point
