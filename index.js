// document.addEventListener("DOMContentLoaded", () => {
//     getCoffee();
// });

// let coffeeName = document.getElementById('id')

// let type = document.getElementById('type')

// let origin = document.getElementById('origin')

// let organic = document.getElementById('organic')

// let roast=document.getElementById("roast")

// let price=document.getElementById("price")


// function getBeverage() {
//     let beverageList = document.getElementById('theList');

//     fetch("https://coffee-json.onrender.com")
//         .then(res => res.json())
//         .then((data) => {
//             data.forEach(beverage => {

//                 let list = document.createElement('li');
//                 list.innerText = beverage.id;

//                 list.addEventListener('click', () => {
//                      getBeverage(beverage);
//                 });

//                 beverageList.appendChild(beverage);

//                 console.log(beverage.id);
//             });
//         });

// }

// function getDetails(beverage){

    
//     coffeeName.innerText = `${beverage.id}`;
// }
//     // runtime.innerText = `${film.runtime}`;
    
//     // showtime.innerText = `${film.showtime}`;
    
//     // description.innerText = `${film.description}`;
    
//     // movieCapacity.innerText = `${film.capacity}`;
    
//     // movieSoldTicket.innerText = `${film.tickets_sold}`;
    
//     // availableTickets.innerText = film.capacity-film.tickets_sold
    

// // document.addEventListener("DOMContentLoaded", () => {
// //     getBeverages();
// // });

// // function getBeverages() {
// //     let beverageList = document.getElementById('list');

// //     fetch("https://coffee-json.onrender.com")
// //         .then(res => res.json())
// //         .then((data) => {
// //             data.forEach(beverage => {

// //                 let listItem = document.createElement('li');
// //                 listItem.innerText = beverage.id;

// //                 listItem.addEventListener('click', () => {
// //                      // You can add functionality to handle click events here
// //                      console.log("Clicked on beverage: " + beverage.id);
// //                 });

// //                 beverageList.appendChild(listItem);

// //                 console.log(beverage.id);
// //             });
// //         });

// // }
document.addEventListener("DOMContentLoaded", () => {
    getBeverages();
});

function getBeverages() {
    let beverageList = document.getElementById('theList');

    fetch("https://coffee-json.onrender.com")
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


