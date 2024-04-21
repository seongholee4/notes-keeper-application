import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

// deploy front end in Vercel and backend in railway (free limited time) or Heroku/any other services.
// Change the path to your backend server URL after you deploy the backend.
const path = "http://localhost:5000";
// axios.get(`${process.env.REACT_APP_API_URL}/api/notes`)

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`${path}/notes`)
      .then((res) => {
        setNotes(res.data);
      })
      .catch(error => console.log('Error fetching notes:', error));
  }, []);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function addNote(event) {
    event.preventDefault();
    const newNote = { title, content };
    axios.post(`${path}/notes`, newNote)
      .then(res => {
        setNotes(prevNotes => [...prevNotes, res.data]);
        // Reset the title and content inputs
        setTitle("");
        setContent("");
      })
      .catch(error => console.error('Error adding note:', error));
  }

  function deleteNote(id) {
    axios.delete(`${path}/notes/${id}`)
      .then((res) => {
        // console.log('Note deleted:', res.data)
        setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
      })
      .catch(error => console.error('Error deleting note:', error));
  }

  function updateNote(id, title, content) {
    axios.patch(`${path}/notes/${id}`, { title, content })
      .then(response => {
        setNotes(prevNotes =>
          prevNotes.map(note => note._id === id ? response.data : note)
        );
      })
      .catch(error => console.error('Error updating note:', error));
  }

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={addNote}>
          <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          ></input>
          <textarea
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={content}
            onChange={handleContentChange}
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
          onUpdate={updateNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
