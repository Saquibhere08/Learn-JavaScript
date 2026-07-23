//! Function example 1

let r=60;
let k=70;
//? Note: '+' will return the output into string format
function plus(r,k){
    const res=r+k;
    console.log("Result: "+res);
}
plus(r,k);

//? Note: ',' will not return the output into string format, instead it will remain as Number

function plus(r,k){
    const res=r+k;
    console.log("Result: ",res);
}
plus(r,k);

//! Function example 2
function greet(username){
    console.log(" Hello !",username);
}
greet("Saquib");

//! Function example 3
console.log(addEx(2,3));
function addEx(a,b){
    return a+b;
}

