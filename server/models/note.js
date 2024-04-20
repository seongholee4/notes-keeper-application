const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
});

// Create a model from the schema
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;