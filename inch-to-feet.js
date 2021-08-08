
function inchToFeet(inch) {
    
    let feet = inch / 12;
    return feet;
}
let inch = 24;
let outputFeet = inchToFeet(inch);
console.log("Inch:",inch,"feet:",outputFeet);


function feetToInch(feet) {
    
    let inch = feet * 12;
    return inch;
}
let feet = 2;
let outputInch = feetToInch(feet);
console.log("Feet:",feet,"inch:",outputInch);