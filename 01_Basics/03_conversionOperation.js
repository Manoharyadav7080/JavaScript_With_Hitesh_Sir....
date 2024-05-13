let score0 = 33 ;
let score1 = "33";
let otherScore ="132abc"
let number  = null ;


console.log(typeof score0); // number 
let valueInNumber0 = Number(score0);// number 

console.log(typeof score1);
let valueInNumber1 = Number(score1);// number ( "33"    =>  33) 
console.log(typeof valueInNumber1 ,  valueInNumber1); // number 

console.log(typeof (score0)); // number 

let valueInNumber = Number(otherScore); // number   why  => this is NaN(not a number)
console.log(valueInNumber , typeof valueInNumber);

let valueInNumber2 = Number(number);
console.log( valueInNumber1); // 0

// NOTE :- 

/* 
"33" => 33
"33ab" => NaN 
true => 1 ; false=> 0;
*/





let IsLoggedIn = 1;
let booleanIsLoggedIn = Boolean(IsLoggedIn);
console.log(booleanIsLoggedIn);

//  NOTE :-

/*
  
1 => true    ; 0 => false 
"" => false ; 
"manohar" => true ;

*/

let someNumber = 33;  
let stringNumber = String(someNumber);
console.log(stringNumber , typeof stringNumber);


// *******************************************  Opration *************************************************
 


let value = 3; 
let NegValue = -value ;
console.log(NegValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // 2^2
// console.log(2%2);
// console.log(2/2);


let str1 = "Hello";
let str2 = " manohar";
let str3 = str1 + str2 ;
console.log(str3); // Hello manohar

// BUT 

console.log(1 + "2"); // 12  (How)
console.log("2" +1);//   21  (How)
console.log("2" +2 + 2); //  222
//BUT 
console.log(2 + 2 + "2"); //  42  (How)  =====>  this are everything possible by the ECMA Script;



// Tricky Question 

  console.log(+true); // 1
  //conole.log(true+1) // not allowed 
  console.log(+""); // 0


  let num1 , num2 , num3 ;
  num1 = num2 = num3 =2+2; // this allowed in js but basically  can should follow readability;



//   Expressions - Increment operator
// Link :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"






















