let form = document.forms[0];
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let passeordErr = document.getElementById("passwordErr");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let username = usernameInput.value;
    let password = passwordInput.value;
    if(username === ""){
        usernameInput.style.border = "2px solid red";
    }
    if(password === ""){
        passeordErr.style.display = 'block';
        passwordInput.style.border = "2px solid red"
    }
    if(username != "" && password != ""){
        console.log(username , password);
        usernameInput.value = "";
        passwordInput.value = '';
    }
})

passwordInput.addEventListener('keyup',()=>{
    let password = passwordInput.value;
    let lower = /(?=.*[a-z])/
    let upper = /(?=.*[A-Z])/
    let special = /(?=.*[@.#$!%*?&])/

    if(lower.test(password) === false){
        passeordErr.innerText = 'It must contain lower case';
    }
    else if(upper.test(password) === false){
        passeordErr.innerText = 'It must contain upper case';
    }
     else if(special.test(password) === false){
        passeordErr.innerText = 'It must contain special character';
    }
     else if(password.length < 8){
        passeordErr.innerText = 'It must contain 8 characters';
    }
    else{
        passeordErr.innerText = '';
    }
})