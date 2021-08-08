function milesToKm(miles) {
    
    let km = miles * 1.609344;
    return km;
}
let miles = 2;
let outputKm = milesToKm(miles);
console.log("Miles:",miles,"KM:",outputKm);