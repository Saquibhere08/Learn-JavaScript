let form = document.forms[0];
let userInput = document.getElementById('usernameInput');
let passwordInput=document.getElementById('passwordInput');

let passwordErr = document.getElementById('passwordErr')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let username = usernameInput.value;
    let password = passwordInput.value;
    
    if(username === ""){
        usernameInput.style.border = "2px solid red";
    }
    if(password === ""){
        passwordErr.style.display='block';
        passwordInput.style.border="2px solid red";
    }
    if(username!=""&& password !=""){
        
    }
})



