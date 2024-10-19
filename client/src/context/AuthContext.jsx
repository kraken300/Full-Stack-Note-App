import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiUrl = 'https://full-stack-note-app-backend-uruo.onrender.com';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const login = async (email, password) => {
    try {
      setError(null);
      const response = await axios.post(`${apiUrl}/api/auth/login`, { email, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful!');
      clearError();
    } catch (err) {
      setError(err.response.data.message);
      toast.error(err.response.data.message);
      clearError();
    }
  };

  const register = async (name, email, password) => {
    try {
      setError(null);
      const response = await axios.post(`${apiUrl}/api/auth/register`, { name, email, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
      toast.success('Registration successful! Please log in.');
      clearError();
    } catch (err) {
      setError(err.response.data.message);
      toast.error(err.response.data.message);
      clearError();
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    toast.info('Logged out successfully!');
    clearError();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
