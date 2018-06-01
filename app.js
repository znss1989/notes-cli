const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

switch (command) {
  case "add":
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log(`
        Note created successfully...
        ---
        Title: ${note.title}
        Body: ${note.body}
        ---
      `);
    } else {
      console.log("Sorry, duplicate title found!");
    }
    break;
  case "read":
    notes.readNote(argv.title);
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
    }
    break;
  default:
    console.log("Unknown instruction!");
    break;
}