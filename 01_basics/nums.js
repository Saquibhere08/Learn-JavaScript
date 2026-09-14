//----------Numbers----------
//Example 1
const score =400
console.log(score);

//Example2
const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));    //provides an decimal point

console.log(typeof(balance));

//Example3
const otherNumber=123.8976
console.log(otherNumber);
console.log(otherNumber.toPrecision(3));// provides the round-off value



//Example4
const hundreads=1000000
console.log(hundreads.toLocaleString()); //converts the into foreign numbering system
console.log(hundreads.toLocaleString('en-IN')); //converts it into Indian Numbering System

