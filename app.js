const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

switch (command) {
  case "add":
    const noteAdded = notes.addNote(argv.title, argv.body);
    if (noteAdded) {
      console.log(`
        Note created successfully...
      `);
      logNote(noteAdded);
    } else {
      console.log("Sorry, duplicate title found!");
    }
    break;
  case "read":
    const noteFetched = notes.readNote(argv.title);
    if (noteFetched) {
      logNote(noteFetched);
    } else {
      console.log("Note not found!");
    }
    break;
  case "list":
    notes.listNotes();
    break;
  case "remove":
    const found = notes.removeNote(argv.title);
    if (found) {
      console.log(`
        ---
        Note with title: ${argv.title} removed.
        ---
      `);
    } else {
      console.log("Note not found!");
    }
    break;
  default:
    console.log("Unknown instruction!");
    break;
}

function logNote(note) {
  console.log(`
    ---
    Title: ${note.title}
    Body: ${note.body}
    ---
  `);
}