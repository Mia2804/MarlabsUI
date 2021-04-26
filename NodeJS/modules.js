var elements = function(arr) {
    return 'There are ' + arr.length + ' elements in the array.'
}

var add = function(a,b) {
    return a+b;
}

var pi = 3.14;
// console.log(elements(['first', 'second']))
module.exports.elements = elements
module.exports.add = add
module.exports.pi = pi