//! Destructing - unpacking the values from arrays
//! Note: In array destructing we use [] but for object we use {}.

//! Array Destructing
let nums =[10,20,30];

//?Method 1
// let ten=nums[0];
// let twenty=nums[1];
// let thirty=nums[3];

//?Method 2
let [ten,twenty,thirty]=nums;

//!Object Destructing
let emp={name:'john',id:101,sal:800000000000};
//destructing
let {name,id,sal}=emp;
console.log(name);
console.log(id);
console.log(sal);


let products = {
    (id:1,title: 'watch' ,price: 80000),
    (id:2,title:'laptop',price:970000),
    (id:2,title:'mobile',price:650000),
}
let tbody=document.querySelector('tbody');
products.map((title , price)=>{
    //let {title,price}=object;
    tbody.innerHTML+=`<tr>
    <td>${title}</td>
    <td>${price}</td>
    </tr>
    `
})


































console.log(ten);
console.log(twenty);
console.log(thirty);

