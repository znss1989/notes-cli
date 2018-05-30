const fs = require('fs');

const addNote = (title, body) => {
  const note = {
    title,
    body
  };
  let notes = [];
  let notesJSON = "";
  try {
    notesJSON = fs.readFileSync('notes-data.json'); // can be non-existing
    notes = JSON.parse(notesJSON); // can be error coded
  } catch (err) {}
  if (notes.every(note => note.title !== title)) {
    notes.push(note);
    notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes-data.json', notesJSON);
  }
};

const fetchNote = (title) => {
  console.log("Fetching the note...");
};

const listNotes = () => {
  console.log("Listing all notes...");
};

const removeNote = (title) => {
  console.log("Removing the note...");
};

module.exports = {
  addNote,
  fetchNote,
  listNotes,
  removeNote
};