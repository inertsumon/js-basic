
function removeDuplicateValue(nums) {
    
    let newArray = [];
    for (let num of nums) {
        if (newArray.indexOf(num) == -1) {
            newArray.push(num);
        }
        else {
            console.log("Duplicate: ",num)
        }
       
    }
    return newArray;

}

let nums = [11, 22, 33, 44, 44, 55, 66, 66, 88, 11];
let output = removeDuplicateValue(nums);
console.log(output);