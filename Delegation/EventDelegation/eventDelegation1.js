//! Event Delegation
let ul=document.querySelectorAll('ul');
ul.addEventListner('click',()=>{
    console.log(event.target);
    event.target.style.backgroundColor=event.target.innerText;
})