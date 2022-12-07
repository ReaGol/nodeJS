// const chalk = require('chalk')
// import chalk from "chalk";
// const yargs = require('yargs')
// const notes = require('./notes.js')

import yargs, { demandOption } from "yargs";
import { getNotes } from "./notes.js";
import { addNote } from "./notes.js";
const yarg = yargs();
import { hideBin } from "yargs/helpers";
// const yarg = yargs(hideBin(process.argv));

yarg.command({
  command: "add",
  describe: "Add new user",
  builder: {
    title: {
      describe: "add user",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note content",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // addNote(argv.title);
    addNote(argv.title, argv.body);
  },
});
yarg.command({
  command: "remove",
  describe: "remove note",
  builder: {
    title: {
      describe: "remove title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

yarg.command({
  command: "list",
  describe: "listing note list",
  handler: function () {
    console.log("listing note list");
  },
});

yarg.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("read a note");
  },
});


yarg.parse(hideBin(process.argv));
