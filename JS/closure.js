// nested functions can always access to the parent variables
function outer(a, b) {
    var outerA = 22;

    // level 2 function
    function inner(C) {
        console.log(outerA)
        // we can also access the input variables
        console.log(a)
        console.log(b)

        function innermost() {
            console.log("From inner most: " + outerA)
        }
        innermost()
    }
    return inner
}
inn = outer(1,2)
inn(12)
