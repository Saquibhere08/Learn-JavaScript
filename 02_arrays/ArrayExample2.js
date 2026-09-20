//Array Methods
const arr=new Array(1,2,3,4)
console.log(arr);

//push
arr.push(10)
arr.push(20)
console.log(arr);

//pop()
arr.pop()
console.log(arr);

//unshift()
arr.unshift(9)
console.log(arr);

//includes()
console.log(arr.includes(8));

//join()
const newarr=arr.join()
console.log(arr);
console.log(newarr);
console.log(typeof newarr);

//splice() and slice()
const myn1=arr.splice(1,3)
console.log("A: ",arr);
console.log(myn1);

const myn2=arr.slice(1,3)
console.log("B: ",arr);
console.log(myn2);








