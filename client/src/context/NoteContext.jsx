import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import AuthContext from './AuthContext';

const apiUrl = 'https://full-stack-note-app-backend-uruo.onrender.com'; 

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  const fetchNotes = async () => {
    if (!user) return;
    try {
      const response = await axios.get(`${apiUrl}/api/notes`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setNotes(response.data);
    } catch (err) {
      setError(err.response.data.message);
      toast.error('Failed to fetch notes!'); 
    }
  };

  const addNote = async (title, content) => {
    try {
      const response = await axios.post(`${apiUrl}/api/notes`, { title, content }, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setNotes((prevNotes) => [...prevNotes, response.data]);
      toast.success('Note added successfully!'); 
    } catch (err) {
      setError(err.response.data.message);
      toast.error('Failed to add note!'); 
    }
  };

  const updateNote = async (id, title, content) => {
    try {
      const response = await axios.put(`${apiUrl}/api/notes/${id}`, { title, content }, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setNotes((prevNotes) => prevNotes.map(note => (note._id === id ? response.data : note)));
      toast.success('Note updated successfully!'); 
    } catch (err) {
      setError(err.response.data.message);
      toast.error('Failed to update note!'); 
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setNotes((prevNotes) => prevNotes.filter(note => note._id !== id));
      toast.success('Note deleted successfully!'); 
    } catch (err) {
      setError(err.response.data.message);
      toast.error('Failed to delete note!'); 
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [user]);

  return (
    <NoteContext.Provider value={{ notes, error, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
