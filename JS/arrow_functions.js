// int function add(x,y) {
//     return x+y
// }
// arroe functions auto return to the var af defined, 
// donnot need {} if only one line
// var sum = (x+y) => x+y
// console.log(sum(1,2))

// 1. Arrow functions sont have this, but borrows from outer scope
// 2. Arrow functions cant be used with new -- bcoz pt 1
// 3. Arrow functions have no "arguments"

// arguments is an array like predifined object

function add(){
    sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum +=arguments[i]
        
    }
    console.log(arguments instanceof A)
    return sum
}

let gr = {
    title:"Main Group",
    employeed:['John', 'Will', 'Alice'],
    showList(){
        this.employeed.forEach(emp =>console.log(this.title+ ': '+emp))
    }
}
gr.showList()

