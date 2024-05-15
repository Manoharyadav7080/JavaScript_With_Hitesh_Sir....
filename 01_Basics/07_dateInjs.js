let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

//   Other formate 

let myCreatedDate = new Date(2023 , 0, 23) // Actually month are start to the Zeros(0);
console.log(myCreatedDate.toDateString());

// Other formate 

//                            years , month , date , hrs , minutes 
let myCreatedDate1 = new Date(2023 , 0, 23 , 5, 3)
console.log(myCreatedDate1.toLocaleString());


// Other Formate 

let myCreatedDate2 = new Date("2023-01-14");
console.log(myCreatedDate2.toLocaleString());

// other Formate ;
let myCreatedDate3 = new Date("01-14-2024");   // exject Date 
console.log(myCreatedDate3.toLocaleString());


//  ****************************   Timestamp *************************************
//  Used :-    Exjecttime ,quiz  , poll  , kesane fastes diya hai usako winner banana hai to  timeStamp ka use karte hai ;

let myTimeStamp =  Date.now() ; //    OR   new Date() ;
console.log(` ${myTimeStamp} this time in millisecond`);  // return value in milliseconds 

// ab en millisecond value se koi value nikalna  thoda sa difficult ho jata hai  kiuki aaap koi room book ya hotel  book kar rhe hai to eska need padata hai ; wha par kai baar  Date ko Compair karna padat hai ; to us case me -------

// Create a application which are booking the holel and rooms then use this concept basically for Ex :- Airbnb 
console.log(myTimeStamp);// return milliscond 
console.log(myCreatedDate3.getTime()) // chuki Date ek Object hai esi liyeeee .get  karke other method ko target karege ;
console.log(Math.floor(Date.now()/1000)); // return in  sec value 


// Specific kewal Date janna hai ya  Yime Ya Year then ------

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getMonth() );
// Or more  other 




























