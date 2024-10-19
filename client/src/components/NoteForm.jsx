import React, { useContext, useState } from 'react';
import NoteContext from '../context/NoteContext';

const NoteForm = () => {
  const { addNote } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-2 bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 transition-colors duration-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        className="border p-2 w-full mb-2 bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 transition-colors duration-500"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button className="bg-green-500 dark:bg-green-700 text-white p-2 rounded hover:bg-green-600 dark:hover:bg-green-800 transition duration-300" type="submit">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
