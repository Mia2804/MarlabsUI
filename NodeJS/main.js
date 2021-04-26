// import {elements} from './modules'
var elements = require('./modules')
var extrn = require('./modules')

// require vs import
// require: check ur node_modules automatically, good for including modules that exist in seperate files
// import: won't(es6)



// console.log(elements(['first', 'second']))
console.log(extrn.elements['first', 'second'])
console.log(extrn.add(11,22))
console.log(extrn.pi)