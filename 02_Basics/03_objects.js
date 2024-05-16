// Singleton :-   actually jab ham letral ki  trah se declear karte hai to singleton nahi banta  and  constructor se banega to hamesa singleton banega;

//    By Constuctor methods ke thro :-  object.create    (esi ke andar sigleton banta hai )
        
                                    //   OR 

// *************************************************    Objects  litrals     **********************************************

const mySym = Symbol("Key1");  // how to use Symbol data type in objects 




const jsUser = {
    name:"Manohar ",
    "fullName": "Manohar Yadav ",   // not  access by the .methods  then use  consle.log (jsUser["fullName"] );
    age:20,
    mySym : "myKey1",
    [mySym] : "myKey1",
    location :"jaipur",
    email:"manoharyadav77080@gmail.com" ,
    isLoggedIn:false ,
    lastLogindays :["Monday" , "Saturday"]

}

//                     Use Any Way to print Objects elements 


console.log(jsUser.email); // manoharyadav77080@gmail.com
//    OR Way 
console.log(jsUser["email"])//manoharyadav77080@gmail.com   , this is a Square Notation 


console.log(jsUser["fullName"]);  // Manohar Yadav 
//                      OR 
console.log(jsUser.fullName); // Manohar Yadav 

console.log( jsUser.mySym);// mySym : "myKey1", string, myKey1
console.log( jsUser.mySym); //  [mySym] : "myKey1", undefined , myKey1
console.log (jsUser[mySym]); //   [mySym] : "myKey1",  string , myKey1

console.log(jsUser);    /*

{
  name: 'Manohar ',
  fullName: 'Manohar Yadav ',
  age: 20,
  mySym: 'myKey1',
  location: 'jaipur',
  email: 'manoharyadav77080@gmail.com',
  isLoggedIn: false,
  lastLogindays: [ 'Monday', 'Saturday' ],
  [Symbol(Key1)]: 'myKey1'                         // most important concepts which is asking by the interviewer "how to use Symbol data Type ";
}


*/


//    ****************************    Objects.freeze( jsUser)    *****************************************

   jsUser.email= "yadavmanohar78094@gmail.com";
   console.log(jsUser["email"]) // yadavmanohar78094@gmail.com (change reflected)
   
   Object.freeze(jsUser);
   jsUser.email= "yadavhima78094@gmail.com";
   console.log(jsUser.email)// yadavmanohar78094@gmail.com   ( not change or reflected)



// *****************************************************               Function => trit as a variable      *******************************************
const jsUser1 = {
  name:"Manohar ",
  "fullName": "Manohar Yadav ",   // not  access by the .methods  then use  consle.log (jsUser["fullName"] );
  age:20,
  mySym : "myKey1",
  [mySym] : "myKey1",
  location :"jaipur",
  email:"manoharyadav77080@gmail.com" ,
  isLoggedIn:false ,
  lastLogindays :["Monday" , "Saturday"]

}

//  lets jo jsUser1 usame greeting add karni hai to -------

jsUser1.greeting =  function () {
  console.log("Hello jsUser1");

}

// console.log(jsUser1.greeting) ;//  [Function (anonymous)] (mtb function execute nahi huaaa hai kewal reference aayaaa hai ;)
console.log(jsUser1.greeting()); // Hello jsUser1
                                //  undefined (this is automatically call)


jsUser1.greetingTwo =  function () {
    console.log(`hello js User ${this.name}`); // Same object ko reffrence karna hai to use karte hai this ;

}  

console.log(jsUser1.greeting()); //Hello jsUser1
                                 //  undefined (this is automatically call)
console.log(jsUser1.greetingTwo());  // hello js User Manohar
                                    //  undefined (this is automatically call)


//   ********************************************      String Interpolation   ***********************************************

// "Hello js User "     --------- (  ("") Conver to Backtic (``)) --------------->        `Hello js User`;

































































