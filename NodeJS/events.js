var events = require('events')
let my
var Person = function(name) {
    this.name = name;
}


var john = new Person("John")
var mary = new Person("Mary")

var people = [john, mary]

people