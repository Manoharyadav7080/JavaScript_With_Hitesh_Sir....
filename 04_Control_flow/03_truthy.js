

// truthy value

const useremail = "yadavmanohar509@gmail.com" ; 

if(useremail) {
    console.log("got user email");
} else {
    console.log("Dont have user email")
}

//  falsy value 
/*
     false , 0 , -0 , BigInt 0n , "" , null , undefined  , NaN ;

*/


// Truthy value 

/*
    "0" , 'false' , " ", [] ,{} , function() {},

*/

// Because :- 
     /*
     false == 0   -----> true 
     false == ''  -----> true 
     0 == ''    ------->   true 
     
     */



//________________________________________________________________________________________

// Note :-  how to find any object are  empty or not 
    const emptyobj = {};

    if (Object.keys(emptyobj).length === 0 ){     //  Object.keys(emptyobj)   -------- >   return ----->   []
        console.log("object is empty");
    }
    // object is empty


//__________________________________________________________________________________________________________________________________________________________
     
    // Working are Complex of this Operator 👇🏾
    // Nullish Coalescing operator (??) :                       all story of of this oprator are full depend on --------> null , undefiend 
    //  NOTE (Where USe) :- mana  jata hai ki kisi me bhi null ya undefiend hai to ye thik baat nahi hai  pta nahi ooo value kaese aaye hi  null and undefiend value se achaaaa(good) hai ki koi flag value daaal de true ya folse dal de ,  esi ke liye Nullish Coalescing operator ka use karte hai,jisase code kharab nahi hota hai ;
let val1 ;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10;  // 10 
// val1 = undefined ?? 15;  // 15
val1 = null ?? 20  ?? 10; // jo first value mi jaye 
// val - null ?? undefined // error 
console.log(val1);


//_________________________________________________________________________________________________________________________________________________________
// NOTE :-  Nullish Coalescing operator and terniary oprator both are deffrente. 

// terniary Operator 
/*

Syntax :- 
        Condation ? true : false ;
     
*/

const iceTeaPrice =100;
iceTeaPrice <= 80 ?  console.log("less than 80") : console.log("greater than 80") ; // greater than 80 



















   