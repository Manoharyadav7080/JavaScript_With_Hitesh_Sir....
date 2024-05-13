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
















