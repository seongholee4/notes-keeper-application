/*
5. Create a Note.jsx component to show a <div> element with a
<h1> for a title and a <p> for the content.
*/

import React, { useState } from "react";

function Note(props) {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);
  const [newContent, setNewContent] = useState(props.content);
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!newTitle.trim() || !newContent.trim()) {
      setError('Title and content cannot be empty.');
      return;
    }
    props.onUpdate(props.id, newTitle, newContent);
    setError('');
    setEditMode(false);
  };


  return (
    <div className="note">
      {editMode ? (
        <div className="noteEdit">
          {error && <div className="errorMessage">{error}</div>}
          <div>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <div className="buttonContainer">
            <button onClick={() => setEditMode(true)}>EDIT</button>
            <button onClick={() => props.onDelete(props.id)}>DELETE</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;
