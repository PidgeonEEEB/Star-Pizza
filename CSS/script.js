function fetchData()
{
    fetch('CSS/Star_pizza.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Http error" + response.status)
        }
        return response.json();
    })
    .then(data => createManyPizzas(data))
    .catch(error => console.error("failed to fetch data", error))
}
fetchData();
const Star_pizza = document.getElementById("Pizza_Menu");
function createPizza(Pizza_menu){
    return `
    <li>
        ${Pizza_menu.Pizza}
        <figure>
            <p class="price">${Pizza_menu.price}</p>
            <a href=" ${Pizza_menu.image.big_image}" target="_blank" >
                <img src="${Pizza_menu.image.small_image}" width="180" height="150" alt="${Pizza_menu.Pizza}" title="${Pizza_menu.Pizza}"> 
            </a>
            <figcaption>${Pizza_menu.description}</figcaption>
            <button onclick="addToBasket(${data.Pizza_menu.price})" class="buy">BUY!!!</button>
        </figure>
    </li>`;
}

function createManyPizzas(data)
{
    console.log("wtf!?")
    for (let i = 0; i< data.Pizza_menu.length; i++)
    {
        Star_pizza.innerHTML += createPizza(data.Pizza_menu[i])
    }
}

function addToBasket(data)
{
    var basket =+ data.Pizza_menu.price;
}