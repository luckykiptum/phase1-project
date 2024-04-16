
document.addEventListener("DOMContentLoaded", () => {
    getBeverages();
});

function getBeverages() {
    let beverageList = document.getElementById('theList');

    fetch("https://coffee-json.onrender.com/coffee")
        .then(res => res.json())
        .then((data) => {
            data.forEach(beverage => {
                let listItem = document.createElement('li');
                listItem.innerText = beverage.id;

                listItem.addEventListener('click', () => {
                    displayDetails(beverage);
                });

                beverageList.appendChild(listItem);

                console.log(beverage.id);
            });
        });
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


