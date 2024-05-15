

// ************************************************ Array *********************************************************************************************************

const myarr = [1,2,3,4,5]; // Resizeable , mixed [boolean , int ,float, var , char , array  , obj , string ]  this all functions are allow in the JavaScript;
console.log(myarr[0]);
// console.log(myarr[one]);// Not allowed


// *******************************************************************      -: Concept :-     ********************************************************************************
//      1. jab bhi coppy Operation karenge   to two type se coppy banata hai --------
//              A. Shallow copies :- same reference point karte hai mtb jo bhi change karenge oo original array me change  hhoga as same Premitive ; 
//              B. deep copies  :- whose properties do not dhare the same  reffrences ;   


// Declaration  of Array in deffrent Way 

// 1st Way 
const myHerose= ["Shaktiman" , "naagraj"];


// 2nd way 
const myArr2= new  Array(1,2,3,4);
console.log(myArr2[1]);




//************************************************************  Array methods  *******************************************************************************

  // A.push() 
  myarr.push(6);
  myarr.push(6);
  console.log(myarr);

  // B.pop()
  myarr.pop() ; // can't argument pass , by this methos remove the last elements ; 
  console.log(myarr);

//   C.unshift()
  // koi  loog batate hai ki bahut bekaar hai 
  myarr.unshift(15) ;  // adding  element in the frist position of  array ; which is shift the all element of array +1 jisase  ki system par load hoga jab million  element honge kisi array ki andar ;
  console.log(myarr);

  //  D.shift()
  myarr.shift(); // remove 15 
  console.log(myarr); // remove  first element of the array ;

//   E.includes
console.log(myarr.includes(9));  //   mtb  myarr me 9 hai ya nahi (true or false );
console.log(typeof myarr.includes(9));
console.log(myarr.indexOf(9));
console.log(myarr.indexOf(4));


const newArr = myarr.join();

console.log(myarr)
console.log(typeof myarr); // return obj

console.log(newArr);
console.log(typeof newArr); // return String 


// ****************************************************        slice , splice       **************************************************************
// plese observed  this method  


console.log("A = " , myarr); // console.log("A = " , myarr);

const myn1 = myarr.slice(1,3);
console.log( myn1); // [ 2, 3 ]
console.log(typeof myn1); // object
console.log("B = " , myarr); // B =  [ 1, 2, 3, 4, 5, 6 ]



const myn2 = myarr.splice(1,3);
console.log( myn2) // [ 2, 3, 4 ]
console.log(typeof myn2);// object
console.log("C = " , myarr); //  C =  [ 1, 5, 6 ]


// NOTE :- 
  /* 
        1. slice methods are not manuplat  the original array .
        2. splice  array are manupulate  the original array .
  
  
  */




























































