//Example1
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


//Example2
let myCreatedDate=new Date(2026,0,23)
console.log(myCreatedDate); //2026-01-22T18:30:00.000Z

//Example3
myCreatedDate = new Date(2926,0,23,5,3)
console.log(myCreatedDate); //2926-01-22T23:33:00.000Z
console.log(myCreatedDate.toLocaleString());   //1/23/2926, 5:03:00 AM 
console.log(myCreatedDate.getTime());


//Example4
let myTimeStamp=Date.now()
console.log(myTimeStamp); //1789669005532

//Example5
console.log(Math.floor(Date.now()/1000));




