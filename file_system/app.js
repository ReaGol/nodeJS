const getNotes = require('./notes')
// const add = require('./utils')

// fs.writeFileSync('notes.txt', 'my name is Bashir')

// fs.appendFileSync('notes.txt', ' and I am cool')


// const sum = add(4, -2)
// console.log(sum);
const notes = getNotes()

console.log(notes);