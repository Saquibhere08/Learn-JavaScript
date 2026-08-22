const myarr=[0,1,2,3,4,5]

const myHeros=["Ironman","Black Widow"]
const myArr2=new Array(1,2,3,4)
console.log(myArr2);

//array methods
myarr.push(6)
myarr.push(7)
console.log(myarr);

myarr.pop()
console.log(myarr);

myarr.unshift(9)
console.log(myarr);
myarr.shift()
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));
console.log(myarr);

const newArr=myarr.join() //it will convert it into string 

console.log(typeof myarr);  //object type
console.log(typeof newArr); //string type

//slice,splice
//slice() will provide the required elements from the array excluding the last element when provided, it will not change the array length
//splice() will do the same but it will include the last element provided and make changes on the array itself and its length.
console.log("A",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1);

console.log("B",myarr);
const myn2=myarr.splice(1,3)
console.log("C",myarr);

console.log(myn1);
console.log(myn2);











