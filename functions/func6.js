//! Function example 4 - Nested Functions
function addSq(x,y){    //function 1
    const a=sq(x);
    const b=sq(y);

    function sq(num){   //function 2
        return num*num;
    }
    return a+b;
}

console.log(addSq(1,2));    //function call
//A nested function is a 
// function defined inside another function, 
// and it can access the outer function's variables and parameters.

// Key Points
// A nested function is declared inside another function.
// It can access the variables and parameters of the outer function.
// It is not accessible outside the outer function.
// It helps organize code and supports concepts like closures.