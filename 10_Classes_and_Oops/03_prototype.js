
    
let myName = "Manohar       ";
let LastName = " yadav                 "

console.log(myName.trueLength);
   

let myHero = ["thor" , "spiderman" ] ;

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpierPower : function() {
        console.log (`spidy power is  ${this.spiderman}`);
    }

}

Object.prototype.HiiManohar = function () {
    console.log(`hitesh is present in all object`);
}
/**
 Note :- jab Object ke prototype ko target karke koi method create kar doge to ooo sabke liye access hoga ;
 */
//heroPower.HiiManohar(); // hitesh is present in all object
myHero.HiiManohar() // hitesh is present in all object

4
/**
 Note :- jab kisi ak singal  string , array or function ke prototype ko target karke koi method banate hai to oo kiwal uusi ke liye access hota hai;
 */

Array.prototype.hiiVijay = function() {
    console.log(" Hii vijay");

}
myHero.hiiVijay(); // Hii vijay
// heroPower.hiiVijay(); // TypeError: heroPower.hiiVijay is not a function



//____________________________    Inheritance    _________________________


// first way------  this approch is OutDated ;


const User ={
    name :"chai",
    email: "hiiManohar632@gmal.com"
}


const Teacher ={
    makeVideo : true 
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport  = {
    makeAssignment  : 'js assignment',
    fullTime :true ,
   __proto_ : TeachingSupport // this is passing reffrence of TeachingSupport  therefore access every value of the TeachingSupport in TASupport ;

}

Teacher.__proto_= User; //    // teacher inherit kar rhah  hai 


// Modern Syntax  // direct access of objects 
  Object.setPrototypeOf( TeachingSupport  , Teacher) ;


//_____________________________ how to add methods in Prototype   _________________

let anotherUser = "ChaiCode        ";
String.prototype.trueLength = function() {
    console.log(`true length is : ${this.trim().length}`);

}

anotherUser.trueLength(); // true length is : 8
"manohar    ".trueLength(); // true length is : 7
"hii coders    ".trueLength(); //  true length is : 10
"    hii    ".trueLength(); //  true length is : 3



















