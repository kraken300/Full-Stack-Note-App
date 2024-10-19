const Note = require('../models/Note');

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await Note.create({
            user: req.user.id,
            title,
            content,
        });
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized to update this note' });
        }

        note.title = title || note.title;
        note.content = content || note.content;

        const updatedNote = await note.save();

        res.json(updatedNote);

    } catch (error) {
        res.status(500).json({ message: 'Server error, could not update the note' });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const noteId = req.params.id;

        const note = await Note.findById(noteId);

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized to delete this note' });
        }

        await note.deleteOne();
        res.json({ message: 'Note removed successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Server error, could not delete the note' });
    }
};

