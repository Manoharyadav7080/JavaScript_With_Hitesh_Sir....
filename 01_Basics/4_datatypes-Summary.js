// kis tarike se memory  me rakha jata hai and access kiya jata hai us based  par data to two type me rakha gya hai 
//  A. primitive  , B. Nonprimitive 


// 1.  primitive type  (Call by value => mens that jab bhi kahi se coppy karte hi to  jo enka original data hai usko   memory ka reffrence  nahi diya jata hai data coppy karke alag diya jata hai , usame jo bhi change honge oo coppy me change honge ; )

/* 
            7 type :- 
            String , Number , Boolean , null , undefined  , symbol (actually esaka use kisi ko unique banane ke liye use hota hai , spacially  jab advance js ke  frontend devlopment me  karenge , chuki ek hi component ko baar baaar use karna hoga to simple component ko unique banane me use karenge ; )   Bigint;


*/

// typeScript   ----->     const score:number = 100;

const score =100;
const scoreValue = 100.3;
const isLoggedIn = false ;
const outsideTemp = null ;
let userEmail;

// use Symbol datatype 
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false 


//  use  Bigint datatype 
const bigNumber = 312793013237769993781222071n;



// 2. Non primitive ( call by refrence => basically ye ooo value hai jo ki direct memory me enka reference allocate kiya ja sakta hai ;  )
           
            /* 
                  Array
                  Objects
                  functio 
            
                  Note :- if (JavaScript masters) {
                            objects master + web or  browser events masters;
                  }
            
            
            */


const heros= ["shaktiman " , "naagraj" , "doga"];
let myobj = {
    name :"manohar yadav",
    age : 22  
}


// function 

const myFunction = function() {
    console.log("Hello world");

}

console.log(myFunction);
console.log(typeof myFunction) // function objects 

console.log( typeof bigNumber); // bigint



// Note :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof





























