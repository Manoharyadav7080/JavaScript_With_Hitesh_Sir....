// Lecture 23

// this :- refers  current context (mtb kiske bare me ) ;


const user = {
    username: "Manohar",
    price: 999,
    welcomeMassage: function(){
        console.log(`${this.username} , wellcome to website`);
        console.log(this);
        /*
        
             {
               username: 'Manohar',
               price: 999,
               welcomeMassage: [Function: welcomeMassage]
              }
               sam , wellcome to website
              {
               username: 'sam',
                price: 999,
                welcomeMassage: [Function: welcomeMassage]
               }
        
        */
    }

}

user.welcomeMassage(); // Manohar , wellcome to website
user.username="sam";
user.welcomeMassage();// sam , wellcome to website
console.log(this); // {}


// BUT 

function chai() {
   let  username= "manohar";
    console.log(this);
  //console.log(this.username); // this is not allow in the function only allow in the objects;

}
chai();

const chai1 = function(){
    let ussername = "Ramesh"
    console.log(this.username); // undefined
    // console.log(this);
}

chai1();

const chai3 = ()=> {
    let username = "Hitesh" 
    console.log(this.username); // undefined
}
chai3();

//    ***********************************************     Arrow functio " () => {} "    *****************************************

// 1st Way  (explicitly (bahar se lgana padata hai ))
const  addTwo = (num1 , num2) => {
    return  `addition of two number is ${num1+ num2}`
}
console.log(addTwo(7,87));  // addition of two number is 94



// 2nd Way  (implicit (phale se lga huaaaa hai ) return ) , when only single line statement 
const addthree = (n1 , n2, n3) => n1+n2+n3;
console.log(addthree(21,21,3)); // 45
//           OR 
const addthree1 = (n1 , n2, n3) => (n1+n2+n3) ;
console.log(addthree1(21,21,3)); // 45

// Question :-  but in case how return Objects 

// const addthree2 = (n1 , n2, n3) => {username :"manohar"} ; // undefined
// console.log(addthree2(21,21,3)); // 45
// But 
const addthree2 = (n1 , n2, n3) => ({username :"manohar"} ); // { username: 'manohar' }
console.log(addthree2(21,21,3)); // 45





















































