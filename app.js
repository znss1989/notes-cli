const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

const command = process.argv[2];
switch (command) {
  case "add":
    console.log("Adding new note...");
    break;
  case "read":
    console.log("Retrieving the note...");
    break;
  case "list":
    console.log("Listing all notes...");
    break;
  case "remove":
    console.log("Removing the note...");
    break;
  default:
    console.log("Unknown instruction!");
    break;
}