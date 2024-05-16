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



// Lecture 18  

//  es lectur  me :-  function kya kya offer kar sakte hai choti si 1 or 2 chiz offer karte hai , then API par move karenge thoda sa genral over viwe dekhenge ki API kya hoti hai  how it work 


// *************************************************    DeStructureing :- Array ki bhi hoti hai and Object ki bhi   ******************************************************


//  par abhi kewal Objects  ki deStructure dekhenge array ko baad me dekhenge .....
// this are very interesting jo sabko aaani chahiye , yeee kam aap bahut baaar karenge  for Ex:- react padhenge to waha se ek obj mlega to usako deStructur ekarke usake value lena pade ga  direct leee sakte hai par deStructure karne se thoda sa easy hoga ;
// abhi react ka bhi ek Ex ke thros baata denge ke kaese value aaati hai and usako kaese deStucture karte hai 


const course ={

    CourseName :"js inn hindi ",
    price : "999" ,
    courseInstructor:"Hitesh_sir",
    courseviwer:"manohar"
}

console.log(course.courseInstructor);//  Hitesh_sir  
//                         OR 


// this is a deStructure concep......👇🏾

 const  {courseInstructor} = course; // mtb 👇🏾
//const {kya value Extract karna hai} = kha se Extract karna hai ; 
// ab jab bhi codeInstructor ka use karna hai to direct courseInstructor use kar sakte hai ;

console.log(courseInstructor); // Hitesh_sir

//                      Other Methods ........................

const{courseviwer: presentsViwer} = course; // Explation 👇🏾
/* 
 presentsViwer (apne hisab se name de sakte hai jaese aaap courseviwer ko bhi use nahi karna chate hai to aap dusara name de sakte hai for Ex :-  presentsViwer diye hai )

*/
console.log( presentsViwer);  // manohar




// **********************************************  In react me deStructureing    ******************************************
/* 
const nevbar= ({company}) =>  {
                  👆🏾 mtb props , ab kahi bhi ({ }) dekhenge to mtb deStuctureing ki ja rhi hai 

}

navbar(company= "Google")

*/

// ***************************************************************************************************************************


//                                                        API      
/*

  JSON structure......... (esame key and value dono String formate me hota hai )



  {

  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "postalCode": "12345"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "555-555-1234"
    },
    {
      "type": "work",
      "number": "555-555-5678"
    }
  ]
}



This JSON structure includes:

Basic personal details like `firstName`, `lastName`, `age`, and `email`.
An `address`  object with nested details.
A `phoneNumbers`  array containing objects for different types of phone numbers.


      //   OR 


      not click this link only know about JSON formats  file 
{
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest/users/users#get-a-user"
}


Note :-  
    ab chuki hame objects ki understanding aaaati hai to es JSON file ko object me badal ke  ek- ek value use kar lunga etna hi to kaam hai api ka ;




// use this link for random API :-  https://randomuser.me/

 Other JSON structure..... (for Understanding )
  {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}




 */




 









































