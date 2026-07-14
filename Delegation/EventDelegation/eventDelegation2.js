let tbody=document.querySelectorAll('tbody');
tbody.addEventListner('click',(event)=>{
    console.log(event.target);
    event.target.style.backgroundColor=event.target.innerText;
})
