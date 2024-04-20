const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const users = require('./users.js');
require('dotenv').config({ path: './.env' });

const app = express();



app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));


const noteSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const Note = mongoose.model('Note', noteSchema);

// module.exports = Note; if you want to use the Note model in other files

// Create a new note
app.post('/notes', async (req, res) => {
    const { key, title, content } = req.body;
    try {
        const note = new Note({ key, title, content });
        await note.save();
        res.status(201).send(note);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Retrieve a note
app.get('/notes/:key', async (req, res) => {
    try {
        const note = await Note.findOne({ key: req.params.key });
        if (!note) {
            return res.status(404).send();
        }
        res.send(note);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a note
app.patch('/notes/:key', async (req, res) => {
    try {
        const note = await Note.findOneAndUpdate({ key: req.params.key }, req.body, { new: true });
        if (!note) {
            return res.status(404).send();
        }
        res.send(note);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete a note
app.delete('/notes/:key', async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ key: req.params.key });
        if (!note) {
            return res.status(404).send();
        }
        res.send(note);
    } catch (error) {
        res.status(500).send(error);
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});