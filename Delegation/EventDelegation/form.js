let form=document.forms[0];
let usernameInput = document.querySelectorAll('input')[0];
let passwordInput = document.querySelectorAll('input')[1];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let username=usernameInput.value;
    let password=passwordInput.value;
    console.log(username,password);
    
})