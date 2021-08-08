let cart = [
    { name: "laptop", price: 50000, quantity: 1 },
    { name: "shirt", price: 500, quantity: 4 },
    { name: "pant", price: 1500, quantity: 2 },
    { name: "watch", price: 3500, quantity: 2 }
];

function totalShopping(cart) {
    let total = 0;
    for (let item of cart) {
        total = total+ item.price * item.quantity;
    }
    return total;
}

let totalAmount = totalShopping(cart);
console.log("Total Bazaar: ",totalAmount);