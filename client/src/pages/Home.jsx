import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100 dark:bg-gray-900 transition duration-500">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100 transition duration-500">
        Welcome to the Note Taking App
      </h1>
      <p className="text-lg text-center mb-6 max-w-lg text-gray-700 dark:text-gray-300 transition duration-500">
        Keep your thoughts organized and easily accessible. Create, edit, and delete notes
        in a simple and intuitive interface. Whether you're jotting down ideas, making 
        lists, or keeping a diary, our app is here to help you manage your notes efficiently.
      </p>
      <div className="flex gap-2 text-center">
        <Link
          to="/login"
          className="bg-blue-500 dark:bg-blue-700 text-white p-2 rounded shadow hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-500"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-500 dark:bg-green-700 text-white p-2 rounded shadow hover:bg-green-600 dark:hover:bg-green-800 transition duration-500"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
