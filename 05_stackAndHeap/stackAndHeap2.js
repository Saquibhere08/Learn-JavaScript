//Example2
let userOne ={
    email:"saquibbinhalim@gmail.com",
    upi:"user@gmail",

}

let userTwo=userOne
userTwo.email="saquib@google.com"   //object is accessed by using '.' 

console.log(userOne.email);
console.log(userTwo.email);
//because objects are stored in the heap area, so when another object is ref to the object that is already
//in the heap memory than the object gets accessed easily to it.

