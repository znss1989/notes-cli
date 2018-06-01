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
  const notes = fetchNotes();
  return notes.filter(note => note.title === title)[0];
};

const listNotes = () => {
  const notes = fetchNotes();
  console.log("Listing all notes...");
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
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

const logNote = (note) => {
  console.log(`
    ---
    Title: ${note.title}
    Body: ${note.body}
    ---
  `);
}

module.exports = {
  addNote,
  readNote,
  listNotes,
  removeNote,
  logNote
};