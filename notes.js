const fs = require('fs');

const addNote = (title, body) => {
  const note = {
    title,
    body
  };
  const notes = fetchNotes();
  if (notes.every(note => note.title !== title)) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const readNote = (title) => {
  console.log("Reading the note...");
};

const listNotes = () => {
  const notes = fetchNotes();
  console.log("Listing all notes...");
};

const removeNote = (title) => {
  console.log("Removing the note...");
};

/* utils */
const fetchNotes = () => {
  try {
    const notesJSON = fs.readFileSync('notes-data.json'); // can be non-existing
    return JSON.parse(notesJSON); // can be error coded
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

module.exports = {
  addNote,
  readNote,
  listNotes,
  removeNote
};