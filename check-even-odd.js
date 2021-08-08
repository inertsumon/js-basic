
function checkEvenOdd(num) {
    
    if (num % 2 == 0) {
        console.log("number is Even: ",num)
    }
    else if (num % 2 != 0) {
        console.log("Number is Odd: ",num)
    }
}

let number = 23;
let checkedNum = checkEvenOdd(number);
// console.log(checkEvenOdd);