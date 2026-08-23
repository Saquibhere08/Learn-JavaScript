//Objects
//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="saquib"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Saquib",
            lastName:"Bin Halim"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}
const obj3=Object.assign(obj1,obj2)
const obj4=Object.assign({},obj1,obj2)
//we stored in another variable as it return the values
console.log(obj3);
console.log(obj4);




