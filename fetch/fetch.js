let cardscontainer = document.getElementById("cardcontainer");

async function fetchApi() {

    try {

        let response = await fetch("https://dummyjson.com/products");

        let data = await response.json();

        data.products.map(({ images, title, price }) => {

            cardscontainer.innerHTML += `
                <div class="card">
                    <img src="${images[0]}" height="200" width="200">
                    <h2>${title}</h2>
                    <p>$${price}</p>
                </div>
            `;

        });

    } catch (err) {

        console.log(err);

    }

}

fetchApi();