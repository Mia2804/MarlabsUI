// var n = "hello"
// var n1 = new String("Hello")
// console.log(typeof(n), typeof(n1))

arr = ['pink', 'blue', 'grey']
// push
arr.push('lime')
console.log('Push lime in arr', arr)
// pop->Removes the last element from an array and returns it
console.log('pop arr return: ', arr.pop())
console.log('arr after pop', arr)
// shift -> Removes the first element from an array and returns it.
console.log('shift arr return: ', arr.shift())
console.log('arr after shift', arr)
// unshift -> Elements to insert at the start of the Array.Inserts new elements at the start of an array.
arr.unshift('orange')
console.log('unshift arr', arr)
// splice() -> The zero-based location in the array from which to start removing elements.Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
arr.splice(1, 2, 'red')
console.log('splice arr start 1 count 2 and replace by red', arr)
// concat() -> The strings to append to the end of the string. Returns a string that contains the concatenation of two or more strings.
conarr = arr.concat(['black', 'white'])
console.log('arr after concat', conarr)


// what array means?

// is an ordered list of values
// array means data structure that store a list of elements...
// memory location is always continues

// a=[1,2,3]

// b=[a,11,22,22,3,5,11]
// console.log(b[a[0]])
// console.log(b[0][0])

// --------sort will effect the original array
// var fruits = ["banana", "apple", "grapes"]
// fruits.sort()
// console.log(fruits)

// var nums = [1,2,11,23,5]
// console.log(nums.sort())
// increasing
// nums.sort((a,b) => a-b)
// console.log(nums)
// decreasing
// nums.sort((a,b) => b-a)