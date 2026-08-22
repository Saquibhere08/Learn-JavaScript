//singleton - it will give one object only
//object literals
//ways to create an object
//Object.create
const mysym=Symbol("Key1")
const jsuser={
    name:"Saquib",
    age:25,
    ph:60065291012,
    location:"Assam",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"],
    [mysym]:"mysymbol1"
}
//ways to access it
//Method1:
// console.log(jsuser.name);
// console.log(jsuser.age);
// console.log(jsuser.ph);
// console.log(jsuser.location);
// console.log(jsuser.isLoggedIn);
// console.log(jsuser.lastLoginDays);

//Method2:
console.log(jsuser["name"]);
console.log(jsuser[mysym]);

//modification /overwrite
jsuser.name="Faisal"
Object.freeze(jsuser)
console.log(jsuser["name"]);


