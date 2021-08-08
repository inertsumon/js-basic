
function fiboSeries(num) {
    
    let fiboArray = [0,1];
    for (let i = 2; i <= num; i++){

        //its also right way
   /*   fibo = fiboArray[i - 1] + fiboArray[i - 2];
        fiboArray.push(fibo); */


        fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
        
    }
    return fiboArray;

}

let outFibo = fiboSeries(50);
console.log(outFibo);