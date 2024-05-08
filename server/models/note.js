const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    content: { type: String, required: true }
});

// Create a model from the schema
const Note = mongoose.model('Note', noteSchema);
console.log("Note model created")

module.exports = Note;