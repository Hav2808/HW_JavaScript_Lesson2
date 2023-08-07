function PrimeNumber(n) {

    const arr = [];
    //n = 20


    for (let num = 2; arr.length < n; num++) {
        let label = 0;
        
        for (let counter = 0; counter < num; counter++) {
            if (num % arr[counter] === 0) { 
                label = 1;
                break;
                }
        }
        if (label === 0) {
            arr.push(num);        
            };
              
        }
    
    return arr;
    //console.log(arr);
}


console.time();
console.log(PrimeNumber(process.argv[2]));
//console.log(delOneGood(process.argv[2]));
console.timeEnd();
console.log (process.argv);