let cardContainer = document.getElementById('cardContainer');
let sup = document.querySelector('sup');

let num = 0;
sup.innerText = num;

cardContainer.addEventListener('click', (e) => {

    if (e.target.innerText === 'add to cart') {
        num++;
        sup.innerText = num;
    }

});