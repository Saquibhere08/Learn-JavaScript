<<<<<<< HEAD
let input = document.querySelectorAll('input');
let btn = document.querySelector('button');
let tbody = document.querySelector('tbody');

btn.addEventListener("click", (e) => {

    e.preventDefault();

    let name = input[0].value;
    let designation = input[1].value;
    let email = input[2].value;

    tbody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${designation}</td>
            <td>${email}</td>
        </tr>
    `;

    input[0].value = "";
    input[1].value = "";
    input[2].value = "";

=======
let input = document.querySelectorAll('input');
let btn = document.querySelector('button');
let tbody = document.querySelector('tbody');

btn.addEventListener("click", (e) => {

    e.preventDefault();

    let name = input[0].value;
    let designation = input[1].value;
    let email = input[2].value;

    tbody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${designation}</td>
            <td>${email}</td>
        </tr>
    `;

    input[0].value = "";
    input[1].value = "";
    input[2].value = "";

>>>>>>> 24ab58770a76d1a38e6b04414652ef9830c40763
});