const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const Note = require('./models/note.js');
require('dotenv').config({ path: './.env' });

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));


// GET a note
app.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST a new note
app.post('/notes', async (req, res) => {
    try {
        const note = new Note({
            _id : new mongoose.Types.ObjectId(),
            title: req.body.title,
            content: req.body.content
        });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ message: "Error adding note", error: error.message });
    }
});

// DELETE a note
app.delete('/notes/:id', async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id });
        if (!note) {
            return res.status(404).send();
        }
        res.send(note);
    } catch (error) {
        res.status(500).json({ message: "Error deleting note", error: error.message });
    }
});

// UPDATE a note
app.patch('/notes/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title.trim() || !content.trim()) {
        return res.status(400).json({ message: "Title and content cannot be empty." });
    }
    try {
        const note = await Note.findOneAndUpdate(
            { _id: id }, 
            { title, content },
            { new: true, runValidators: true }
        );
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.send(note);
    } catch (error) {
        res.status(500).json({ message: "Error updating note", error: error.message });
    }
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});