import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import ThemeToggle from './ThemeToggle'; 

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  return (
    <header className="bg-sky-600 dark:bg-gray-900 p-4 text-white dark:text-gray-200 transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-300">Note Taking App</Link>
        </h1>
        <nav className="flex items-center space-x-4 list-none">
          {!user ? (
            <>
              <li>
                <Link to="/login" className="hover:underline">Login</Link>
              </li>
              <li>
                <Link to="/register" className="hover:underline">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/notes" className="hover:underline">My Notes</Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 p-1 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            </>
          )}
          <li className="ml-2"> 
            <ThemeToggle />
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
