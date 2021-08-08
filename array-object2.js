let cart = [
    { name: "laptop", price: 50000, quantity: 1 },
    { name: "shirt", price: 500, quantity: 4 },
    { name: "pant", price: 1500, quantity: 2 },
    { name: "watch", price: 3500, quantity: 2 }
];

function cheapItem(cart) {
    let cheap = cart[0];
    for (let item of cart) {
        if (item.price < cheap.price) {
            cheap = item;
        }
    }
    return cheap.price;
}

let Amount = cheapItem(cart);
console.log("Cheapest Value: ",Amount);