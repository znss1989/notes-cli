const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const titleOption = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};
const bodyOption = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Add a new note", {
    titleOption, 
    bodyOption
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    titleOption
  })
  .command("remove", "Delete a note", {
    titleOption
  })
  .help()
  .argv;
const command = argv._[0];

switch (command) {
  case "add":
    const noteAdded = notes.addNote(argv.title, argv.body);
    if (noteAdded) {
      console.log("Note created successfully...");
      notes.logNote(noteAdded);
    } else {
      console.log("Sorry, duplicate title found!");
    }
    break;
  case "read":
    const noteFetched = notes.readNote(argv.title);
    if (noteFetched) {
      notes.logNote(noteFetched);
    } else {
      console.log("Note not found!");
    }
    break;
  case "list":
    const notesFetched = notes.listNotes();
    console.log(`Listing all the ${notesFetched.length} note(s)...`);
    notesFetched.forEach((note) => {
      notes.logNote(note);
    });
    break;
  case "remove":
    const found = notes.removeNote(argv.title);
    if (found) {
      console.log(`---
Note with title: ${argv.title} removed.
---`);
    } else {
      console.log("Note not found!");
    }
    break;
  default:
    console.log("Unknown instruction!");
    break;
}

