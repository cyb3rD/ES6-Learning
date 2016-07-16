'use strict';

let salary = {
    low: '32000',
    avg: '50000',
    high: '75000'
}

// Desctructing objects
let { low: newLow, average: newAverage, high: newHigh } = salary;
console.log(newHigh); // 75000

let newLow2, newAverage2, newHigh2;
// without () ath the next line line it will be Synta error
({low: newLow2, average: newAverage2, high: newHigh2} = salary);
console.log(newHigh2); // 75000

// Destruct array with one element
let [high, low] = [,];
console.log(`high: ${high}   low: ${low}`);

// Destructing in for .. of
for (let [a, b, c] of [[3, 5, 7]]) {
    console.log(`a: ${a} | b: ${b} | c: ${c}`); // a: 3 | b: 5 | c: 7
}


