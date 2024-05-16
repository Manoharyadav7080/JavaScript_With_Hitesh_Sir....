// Lecture 17..........


// Question:-   How to create a singleton objects and  litteral objects ?
  
//   *************************  Singleton Objects **************************************
 
const  tinderUser = new Object();

// *******************************  litrals Objects  *************************************

const tinderUser1 = {};
/*    Both are (singleton and tinderUser )  same in object creation time ;  */

tinderUser1.id = "1234";
tinderUser1.name = "Manohar";
tinderUser1.isLoggedIn = false ;

console.log(tinderUser);  // {} (empty objects) 
console.log(tinderUser1); // { id: '1234', name: 'Manohar', isLoggedIn: false }

console.log("******************************")

//   ********************************   Objects  ke andar Objects usake andar objects   ***************************************

const regularUser = {
                email: "Himayadav7080@gmail.com",
                fullName: {
                    userfullname: {
                        firstname: "Manohar",
                        lastname : "Yadav"

                    }
                }
}

console.log(regularUser.fullName.userfullname.firstname); //Maanohar     , 
console.log(regularUser.fullName.userfullname); // { firstname: 'Manohar', lastname: 'Yadav' }

// Additional information 
console.log(regularUser.fullName?.userfullname.firstname); // "fullName?" ye thoda sa protection kar deta hai agar "fullname " exist hi nahi karta  to jab API se response aata hai to ye syntax ko use karna padata hai  ,agar ye value hai to kariye warna kya karenge if else lgana padega ;



//********      Merging concept  ------>  Object.assign(target ({}) , sourse (obj1 , obj2) )  mtb obj1 & obj2 empty objects me jaaa rhe hai      ***********"
//                              ------->  object.assign( Obj1 , Obj2 , 0bj3) mtb obj2 and obj3 ye obj1 me jaaa rhe hai ;                                                                  



const obj1 = {  1:"a" , 2: "b"};
const obj2 = { 3:"a" , 4: "b"};

const obj3 = {obj1 , obj2};
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }     this is wrong way ;



const obj5 = Object.assign( {},obj1 , obj2);  
//                  OR 
// const obj5 = Object.assign(obj1 , obj2);

console.log(obj5)  //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Basically  always time use this methods ;
const obj4 = {...obj1 , ...obj2}; 
console.log(  "obj3 are ", obj4);

// Other Syntax   jab Database se information aaayengi to use  this Syntax ;
// Array of Objects me data aaati hai  ;

const user = [

    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"k@gmail.com"
    },
    {
        id:3,
        email:"y@gmail.com"
    }

]

// user ki value print krane ke liye  .map  ka use kal sakte hai par abhi normal use karte hai 

console.log(user[0].email); //k@gmail.com
console.log(user[2].email); // y@gmail.com


//   ************************   Use  .Map methods   **************************

// Use the map method to create a new array of email addresses
const emails = user.map(user => user.email);

// Print the array of email addresses
console.log(emails); // [ 'h@gmail.com', 'k@gmail.com', 'y@gmail.com' ]




//  ******************************       Other Concepts use more time       ************************************

console.log(tinderUser1); // { id: '1234', name: 'Manohar', isLoggedIn: false }
console.log(Object.keys(tinderUser1)) // [ 'id', 'name', 'isLoggedIn' ] ------>( mtb  jo esaka return type hai oo ek array hai es pe .(dot) lga kar value ko print kra sakte hai)
console.log(Object.values(tinderUser1)) // [ '1234', 'Manohar', false ]

// for ex :- 

const tinderReturn = Object.keys(tinderUser1);
for(let i=0 ; i< tinderReturn.length; i++) {
    console.log(tinderReturn[i]); 
}
// output :- 
/* 

id
name
isLoggedIn

*/


// *************************************     other methods which  are min use ( esame har ek key and value ko array me dal diya jata hai  diya jata hai )   ********************************************


console.log(Object.entries(tinderUser1)); //  [ [ [ 'id', '1234' ], [ 'name', 'Manohar' ], [ 'isLoggedIn', false ] ] ]



//  last methods ( chuki ham jante hai ki loop ke thros ham data ko access kar rhe hai objects se to aesa ho sakta hai ki value exist hi nahi karti hai to site crase hone ki chance ho jati hai. )
// to simply use puch sakte hai
console.log(tinderUser1.hasOwnProperty('isLoggedIn')) //true
console.log(tinderUser1.hasOwnProperty('isLogged')) // false 







































