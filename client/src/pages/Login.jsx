import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login, error, setError } = useContext(AuthContext); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setError(null); 
  }, [setError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (!error) {
      navigate('/notes');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 transition duration-500">
      <form
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-80 transition duration-300"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          className="bg-sky-600 dark:bg-sky-800 text-white p-2 rounded w-full hover:bg-sky-700 dark:hover:bg-sky-900 transition"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
