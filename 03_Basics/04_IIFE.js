
// Immediately Invoke Function Expressions (IIFE) 

function connection() {
    console.log(` DB connected`);
}
connection(); //DB connected


//  *****************************************              OR  by IIFE method "()()"          *******************************************

// called as named IIFE 
(function connection() {
    console.log(` DB connected`);
})  
(); //   DB connected,, mens that "()" this is execution 

/*  NOTE :-    ";"  use always in the IIFE  (kuki function to invoke to ho jata hai par usako rokana bhi padata hai )
     IIFE methods :-  jo  function immediately execute ho jaaaye this is no perfect definition;
     Definition:- global scope ke palution se problam hoti hai kiiii baar to jo global scope ke variable hai ya jo bhi wala declaration hai usake polution ko  hatane ke liye IIFE ka use kiya hai ;    

*/

// +++++++++++++++++++++++++++++++++++++++++++++   Arrow function with IFFE    +++++++++++++++++++++++++++++++++++++++++


//  called as simple  IIFE ;
( () => {
    console.log("DB2  CONNECTED");
})();


// Other way declaration of the IIFE 

( (myname ) => {
    console.log(`my name is ${myname };`)
})
// ('Manohar' );
//OR 
("YAdav");





/*

this Point Noted always :-
                jab labhi bhi 2  IIFE  kisi single file me likhana ho to phale wale IIFE ke Execution ke baad "();" usako end ya rokna bhi padata hai.
               






*/

