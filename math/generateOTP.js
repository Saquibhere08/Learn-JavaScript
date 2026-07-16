// math object
console.log(Math.min(4,5,6,3,5,3,4));
console.log(Math.max(4,5,6,3,5,3,4));
console.log(Math.pow(2,4));
console.log(Math.round(8.3)); //8
console.log(Math.round(8.5)); //9
console.log(Math.round(8.8)); //9

console.log(Math.ceil(8.3));
console.log(Math.ceil(8.5));
console.log(Math.ceil(8.8));

console.log(Math.floor(8.3));
console.log(Math.floor(8.5));
console.log(Math.floor(8.8));

console.log(Math.trunc(8.3));
console.log(Math.trunc(8.5));
console.log(Math.trunc(8.8));

console.log(Math.random());

function generateOtp()
{
    let otp=Math.floor(Math.random()*100000);
    if(otp>999 &&otp<10000)
    {
        console.log(otp);
    }
    else{
        generateOtp();
    }
}
generateOtp()

let btn=document.getElementById('btn1');
btn.addEventListener('click',generateOtp);