const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

switch (command) {
  case "add":
    notes.addNote(argv.title, argv.body);
    break;
  case "read":
    notes.fetchNote(argv.title);
    break;
  case "list":
    notes.listNotes();
    break;
  case "remove":
    notes.removeNote(argv.title);
    break;
  default:
    console.log("Unknown instruction!");
    break;
}