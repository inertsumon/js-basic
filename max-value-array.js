


function findMax(nums) {
    let checked = nums[0];
    for (let num of nums) {
        if (num > checked) {
            checked = num;
        }
    }
    return checked;
}
let nums = [10, 20, 30, 21, 90, 40, 55, 66, 7, 8];
let finalOutput = findMax(nums);
console.log(finalOutput);