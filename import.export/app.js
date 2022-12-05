import func from func

// Require is more of dynamic analysis, and import is more of static analysis.
// Require Throws error at runtime and Import throws error while parsing
// Require is Nonlexical and Import is Lexical
// Requires to stay where they have put the file, and imports get sorted to the top of the file.


//add it to package.json

//to import: type module of file name
////package.json
// {
//   "name": "index",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "type": "module",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC"
// }

//__filename and __dirname wont work
