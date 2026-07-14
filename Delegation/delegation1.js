let lis=document.querySelectorAll("li");
for(let i=0;i<lis.length;i++){
    lis[i].addEventListener("click",()=>{
        lis[i].style.backgroundColor=lis[i].innerText;
    })
}