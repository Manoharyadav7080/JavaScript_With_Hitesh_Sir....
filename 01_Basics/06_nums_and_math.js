const score =400;
console.log(score);

const balance = new Number(100);
console.log(balance); // additional feture  //[Number: 100]


const changeString = balance.toString();
const changeStringLength = balance.toString().length;
console.log( typeof balance); //objects
console.log( typeof changeStringLength,changeStringLength);
console.log(balance.toFixed(1));
console.log(balance.toFixed(2));



// This is intresting  methods of js  please learn about full concept to the MDN (  this is use in devlopment ) .....................
const otherNumber = 23.8266;
console.log(otherNumber.toPrecision(4));

let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // '1.2e+3'


//  SimplyReading 

const hundreads =1000000
console.log(hundreads.toLocaleString()); // 1,000,000 ( US standard)
console.log(hundreads.toLocaleString('en-IN')); //   10,00,000   (Indian Standerd )


// ***************************************************   Maths  *********************************************

console.log(Math);
console.log(Math.abs(-4)) // 4    ----> use for change sign of only Negitive value not a positive value  
console.log(Math.abs(3)) // 3 


console.log(Math.round(4.3))// 4
console.log(Math.ceil(4.3))// 5
console.log(Math.floor(4.9 ))// 4   (Choose upper cas evalue )
console.log(Math.min(4,5,6)) // 4   ( choose min cas evalue )
console.log(Math.max(4,5,6)) // 6

console.log(Math.random()); // always    Math.rendom() < 0
console.log(Math.random() *10);    // esame Zeros ho sakta hai  for Ex :-  0.01 
console.log((Math.random() *10) +1); // always     (Math.random() *10) +1 > 1 


// Formulla

const  min = 10;
const  max = 20 ;

console.log(Math.floor(Math.random() * (min -max + 1)) + min );

console.log(Math.floor(1.32)); //  take only actual value 
























