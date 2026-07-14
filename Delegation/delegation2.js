let td=document.querySelectorAll('td');
    for(let j=0;j<td.length;j++){
        td[j].addEventListener("click",()=>{
            td[j].style.backgroundColor=td[j].innerText;
        })
    }
