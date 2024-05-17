// Lecture  18.............

function saymyName() {
    console.log("M");
    console.log("a");
    console.log("n");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("r");
}
saymyName;// Reffrence 
saymyName(); // function  Execution 


// ************************  write  defferrent type(Way)   function  in js  ****************************************** 


// simpal functionn program.......
//                parameters 👇🏾
function addTwoNumber(num1, num2) {
    console.log(num1 +num2);   
} 

function addTwoNumber1(num1, num2) {
    const result = num1 +num2;
    return result;
    console.log("manohar ") ; // not Execute because afer return  statement not execute any line ; 
   
} 

function addTwoNumber2(num1, num2) {
   
    return num1+num2;
   
} 


//   arguments👇🏾  
addTwoNumber(2,5);
//      OR
addTwoNumber(num1=2, num2=4) ;
//      OR  
addTwoNumber(6 , "m"); //  6m (String)
//      OR 
addTwoNumber(3, null);
//      OR 
const result = addTwoNumber(5, 9) ; // 14 (why) :-console.log are use in the function not a return ;
 console.log( `Result: ${result}`); //Result: undefined

 const result1 = addTwoNumber1(5,7) ;
 console.log( `Result: ${result1}`);  // Result: 12


 // call  2nd functio 

 console.log;



// *****************************************************     deffrent  way of passing  arguments in the function   ************************************

function logininUserMassage(username) {
// if(!username ) {
//          OR
    if(username === undefined) {
        console.log("plese enter a username");
        return;
    };
    return `${username} just logged in.` 
}
console.log(logininUserMassage("Manohar Yadav")); //Manohar Yadav just logged in.
console.log(logininUserMassage(""));//  just logged in.
console.log(logininUserMassage()); // undefined just logged in.

//  *******  Passing default value 

function defaultFunction(name= "Rajesh") {
    if (!name) {
        console.log("plese inter  a Username");
        return ;
    }
    return `${name} just logged in.`
}
console.log(defaultFunction("manoharyadav")); // manoharyadav just logged in.
console.log(defaultFunction()); // Rajesh just logged in.(default setting )




// ******************************************     passing multiple value in the function as a arguments (addcard concept )  ************************************
//               restOperator👇🏾 (change the value of Spread and restOperator  as a requirement , use for passing multiple value)
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400,  2,65,34));// [ 200, 400, 2, 65, 34 ]


// Other things ...................

function calculateCartPrice1(val1 , val2,...num1) {
    console.log(val1);// 200
    console.log(val2); // 400
    return num1; //  [ 2, 65, 34 ]
}
console.log(calculateCartPrice1(200, 400,  2,65,34)); // [ 2, 65, 34 ]


// *********************************  passing objects in the function  (handleObjects)   ******************************

const user = {
    username: "manoharYadav",
    price : 199
// ager prices ki jagah prices kar diya to error aaaani start h jayegi esiliye agar ham objects handle kar rhe hai to type safety check karni padati hai;
// ki  jo ham function me Extract kar rha hu  ooo function me hai ya nahi hai , aur jo value pass kar rhe ho as a parameter ke thru usaka data type Objects hai ki nahi hai ,
// esiliye to log typeScript ko pasand karte hai  usme type checking ho jati hai , javaScript me bhi ho jaye ga par esame Etra code likhana padata hai checking karne ke liye  (ifelse  Statement use karte hai ye object hai ki nahi , yeee string hai ki nahi  ) ; 
    // prices : 199
}


function handleObjects(anyobjects) {

    console.log(`Username is ${anyobjects.username} and price is ${anyobjects.price}`);

}

handleObjects(user); // Username is manoharYadav and price is 199
// if 
handleObjects(user); // Username is manoharYadav and price is undefined  User element price to prices ;
//     OR 

handleObjects({
    username: "manoharYadav",
    price : 199
} );  // Username is manoharYadav and price is 199



// *****************************************    passing Array in the Function as a arguments     ***********************************************


const myNewArray = [200 , 400, 500 , 600] ;

function returnSecondValue(getAArray) {
    return getAArray[1];
}
console.log(returnSecondValue(myNewArray)); // 400 
console.log(returnSecondValue([200 , 400, 500 , 600]));  // 400 


























































