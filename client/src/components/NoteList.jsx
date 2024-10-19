import React, { useContext } from 'react';
import NoteContext from '../context/NoteContext';

const NoteList = () => {
  const { notes, deleteNote, updateNote } = useContext(NoteContext);
  const [editing, setEditing] = React.useState({ id: null, title: '', content: '' });

  const handleEdit = (note) => {
    setEditing({ id: note._id, title: note.title, content: note.content });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateNote(editing.id, editing.title, editing.content);
    setEditing({ id: null, title: '', content: '' });
  };

  return (
    <div className="container mx-auto px-4">
      {editing.id ? (
        <form onSubmit={handleUpdate} className="mb-4">
          <input
            type="text"
            placeholder="Title"
            className="border p-2 w-full mb-2 bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 transition-colors duration-500"
            value={editing.title}
            onChange={(e) => setEditing({ ...editing, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Content"
            className="border p-2 w-full mb-2 bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 transition-colors duration-500"
            value={editing.content}
            onChange={(e) => setEditing({ ...editing, content: e.target.value })}
            required
          />
          <button className="bg-blue-500 dark:bg-blue-700 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300" type="submit">
            Update Note
          </button>
        </form>
      ) : null}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <li key={note._id} className="flex flex-col justify-between bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-sm p-4 transition-colors duration-500">
            <div>
              <h2 className="font-bold text-gray-900 dark:text-gray-100">{note.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{note.content}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Last updated: {new Date(note.updatedAt).toLocaleString()}
              </p>
            </div>
            <div className="mt-2">
              <button
                className="bg-yellow-500 dark:bg-yellow-600 text-white p-1 rounded mr-2 hover:bg-yellow-600 dark:hover:bg-yellow-700 transition duration-300"
                onClick={() => handleEdit(note)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 dark:bg-red-600 text-white p-1 rounded hover:bg-red-600 dark:hover:bg-red-700 transition duration-300"
                onClick={() => deleteNote(note._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
