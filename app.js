const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe:'Note Title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler() {
        notes.listNotes()
    }
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Reads a Note',
    builder: {
        title: {
            describe: 'Reading a Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    } 
    
})

yargs.parse()



 