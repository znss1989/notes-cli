const addNote = (title, body) => {
  console.log("Adding new note...");
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