// There are 4 types of scope in JavaScript: global scope , local scope, block scope, and function scope.
// Scope ========> {}


// var v = 300;

let a = 30;
if(true)  {
    let a =10;
    const b = 20 ;

    // var c = 30 ;
//      OR 
     // c =40

     console.log("Inner :",  a); // blockScope
}
 

// console.log(a);
// console.log(b);
// console.log(c); // 30  (biggest problem )

console.log("Outer :" , a); // GlobalScope 


//  NOTE :- 
  /*
    browser ks Scope and Node ka Scope(which  code run by the  node(code Environment)) dono alag alag hota hai; 

   */



// Lecture 21

//  what is Closure ? :- 
    /*
        it is good technique  in the js. it is important as perspective interview  , esako 
        samaghanea(understanding) ke liye DOM (Document obbject model ) aana chahiye ki kaese HTML ke page ko Menuplate kiya jata 
        hai  javaScript ke throw;


       
    */


function  one() {
    const username = "manohar"
    function two() {
        const website = "Youtybe"
        console.log(username); // manohar
    }
    // console.log(website); // not allow
    two();
}
one();

// seconde Ex:- 

if(true) {
    const username = "Ramesh" ;
    if (username === "manohar"){
        const website = "Youtube";
        console.log(username + website);
    }
    // console.log(website); not allow because website is a block scope  variable ;


}
// console.log(username); // not allow because it is not a global variable ;



// ++++++++++++++++++++++++++++++++++++++++++++++   Interesting  ++++++++++++++++++++++++++++++++++++++++++===


//  ************************ Function declaration *******************************

/*

   Note :- 
          jab function ko call lgate time kahi kisi variable me hold  nahi kiya gya hai to ham kahi se bhi call 
          lga sakte hai par jab kisi variable me hold kar diya gya hai to only function ke niche (down ) se call kar sakte hai ;


*/


// Type 1.............
console.log(addone(4));// 5 (allow )
function addone (num) {
    return  num+1;
}
// addone(4)
// console.log(addone(4)); // 5



// Type 2....................
// console.log(addTwo(7)); // not allow be
const addTwo = function(num) {
    return num+2;

}
// addTwo(7);
console.log(addTwo(7)); // 9


