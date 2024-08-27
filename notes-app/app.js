#!/usr/bin/env node
// const yargs = require("yargs");
import yargs from "yargs";
import { hideBin } from "yargs/helpers"
// const noteFunc = require('./notes.js')
import {removeNotes, addNotes, listNotes, readNote} from "./notes.js"

const argv = yargs(hideBin(process.argv));

argv.command({
    command: "add",
    describe: "describing the body of the text",
    builder:{
        title:{
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body:{
            describe: "Note Body",
            demandOption: true,
            type: "string"
        },
    },
    handler(argv){
        addNotes(argv.title, argv.body)
    }
})

argv.command({
    command: "read",
    describe: "reading the title",
    builder:{
        title:{
            describe: "Read Title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        readNote(argv.title,)
    }
})


argv.command({
    command: "remove",
    describe: "removing he note",
    builder:{
        title:{
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body:{
            describe: "Note Body",
            demandOption: true,
            type: "string"
        },
    },
    handler(argv){
        removeNotes(argv.title)
    }
})


argv.command({
    command: "list",
    describe: "listing all the notes",
    builder:{
        title:{
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
    },
    handler(argv){
        listNotes(argv.title, argv.title)
    }
})
.parse()

// console.log(yargs.argv);





























// console.log(yargs.(process.argv))

// yargs.version("2.0.5");

//creating add commands
// yargs.command({
//     command: "add",
//     describe: "Add a New Note",
//     handler: function () {
//         console.log("Adding a new note")
//     }
    
// })

//creating the remove commands
// yargs.command({
//     command: "remove",
//     describe: "Removing a note",
//     handler: function () {
//         console.log("Removing a note")
//     }
// })
// // creating a read command;
// yargs.command({
//     command: "read",
//     describe: "Reading a note",
//     handler: function () {
//         console.log("Reading a note")
//     }
// })
// // creating a list command;
// yargs.command({
//     command: "list",
//     describe: "Listing all notes",
//     handler: function () {
//         console.log("Listing all notes")
//     }
// })

// yargs.command({
//     command: "add",
//     describe:"add a new note",
//     builder:{
//         title:{
//             describe:"Note title",
//             demandOption: true,
//             type:"string"
//         } 
//     },
//     handler: function(argv){
//         console.log(`My title  is ${argv.title}`);
//     }
// })




















// const fileContent = require("./utilis");

// const nameFromUtilis = fileContent.name

// console.log(nameFromUtilis, fileContent.addFunc(6,9));
// const getNotes = require("./notes.js");
