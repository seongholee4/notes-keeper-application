import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import initialNotes from "../notes";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function addNote(event) {
    event.preventDefault();
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { key: prevNotes.length + 1, title: title, content: content },
      ];
    });
    // Reset the title and content inputs
    setTitle("");
    setContent("");
    // console.log(notes);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.key !== id);
    });
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
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
