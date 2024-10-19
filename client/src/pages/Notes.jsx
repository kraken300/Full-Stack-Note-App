import React, { useContext } from 'react';
import NoteContext from '../context/NoteContext';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

const Notes = () => {
  const { error } = useContext(NoteContext);

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen transition-colors duration-500">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      {error && <p className="text-red-500 dark:text-red-400 mb-2">{error}</p>}
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default Notes;
