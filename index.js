


document.addEventListener("DOMContentLoaded", () => {
    getBeverages();
});

function getBeverages() {
    const menuList = document.getElementById('theList');
    const shoppingList = document.getElementById('cart');

    fetch("https://coffee-json.onrender.com/coffee")
        .then(res => res.json())
        .then((data) => {
            data.forEach(beverage => {
                let listItem = document.createElement('li');
                listItem.innerText = beverage.id;

                listItem.onclick = () => {
                    addItemToShoppingList(beverage);
                    displayDetails(beverage);
                };
                menuList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    const addItemToShoppingList = beverage => {
        const newItem = document.createElement('li');
        newItem.textContent = beverage.id;
        shoppingList.appendChild(newItem);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            shoppingList.removeChild(newItem);
    };

    newItem.appendChild(deleteButton);
    shoppingList.appendChild(newItem);
}

function displayDetails(beverage) {
    let coffeeName = document.getElementById('id');
    let type = document.getElementById('type');
    let origin = document.getElementById('origin');
    let organic = document.getElementById('organic');
    let roast = document.getElementById("roast");
    let price = document.getElementById("price");

    coffeeName.innerText = beverage.id;
    type.innerText = beverage.type;
    origin.innerText = beverage.origin;
    organic.innerText = beverage.organic ? 'Yes' : 'No';
    roast.innerText = beverage.roast;
    price.innerText = beverage.price;
}
}

