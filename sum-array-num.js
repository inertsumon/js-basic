// let nums = [10, 20, 30, 21, 9, 40, 55, 66, 77, 88];

function arraySum(nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
        
    }
    return total;
}


// let nums = [2,2,2,2];
let nums = [10, 20, 30, 21, 9, 40, 55, 66, 77, 88];
let finalOutput = arraySum(nums);
console.log(finalOutput);