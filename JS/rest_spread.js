// -------args-------
// using ...args as variable: ...args should be only or last variable



// -------Spread------
let arr = [12,19,11]
//this will not work! max need numbers instead of arr
// console.log(Math.max(arr))
// Do this:
console.log(Math.max(...arr))
// Multiple
let arr1 = [12,133,234]
console.log(Math.max(...arr, ...arr1, 12, -1))


x = 101
y = 909