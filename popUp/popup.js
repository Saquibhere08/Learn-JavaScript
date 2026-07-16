//! alert() - used to displat a warning message
// it creates i button i.e. ok button
//until and unless user click on ok button he cannot interact with the webpage.
let btn1 =document.getElementById('btn1');
btn1.addEventListener('click',()=>{
    alert('warning...');
})

//! prompt() - used to collect input from the user
//? it creates one input and 2 buttons ( ok button and cancel button)
//? if user clicks ok button, it returns user input in form of string
//? if user clicks cancel button, it returns null

let btn2=document.getElementById('btn2');
btn2.addEventListener('click',()=>{
    let num1 = Number(prompt('Enter Num1'));
    let num2 = Number(prompt('Enter Num2'));
    console.log(num1+num2);
    
})

//! confirms() - used to take the extra confirmation from the user
//? creates 2 buttons (ok and cancel);
//?if user clicks on o

let btn3=document.getElementById('btn3');
btn3.addEventListener('click',()=>{
    let bool =confirms("are u sure?");
    console.log(bool);
    if(bool){
        window.close();
    }
    
})