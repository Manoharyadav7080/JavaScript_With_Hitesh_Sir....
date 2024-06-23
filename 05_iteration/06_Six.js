// NOte :- ForEach loop not return a any value 

const coding = ["js" , "java" , "c++" , "python"] ;
const value = coding.forEach((item) => {
    console.log(item);
})

console.log(value); // undefined  , therefor not  return aythings a ForEach loop

//__________________________________    filte methods ____________________________
//   filter are return a value 


const myNums = [1,2,3,4,5,6,7,8,9,10];
const number = myNums.filter((num)  => num>4) 
console.log(number);
// Output :- [ 5, 6, 7, 8, 9, 10 ]

// But
const  number1 = myNums.filter((num)  => {
    num>4
} ) 
console.log(number1); // [] (Why) , because num>4 are follow the Scope level  therefore return it ;

// Therefor
 const  number2 = myNums.filter((num)  => {
    return num>4
} )
console.log(number2); // [ 5, 6, 7, 8, 9, 10 ]



// __________________________________    print Array Element by forEach  loop ____________________________________
// print Array element by the ForEach element use with different  way 

const newNums = [];
myNums.forEach( (item) => {
    if(item > 4) {
        newNums.push(item) ;

    }
})
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]



// __________________________    Actually Exampal of the  filtter methods  ______________________

const books = [{titel:"Book One " , genre:'fiction' , publish:1998 , edition:2004},
    {titel:"Book Two" , genre:'Non-fiction' , publish:1992 , edition:2008},
    {titel:"Book Three " , genre:'History' , publish:1999 , edition:2007},
    {titel:"Book Four " , genre:'Non-fiction' , publish:1989 , edition:2010},
    {titel:"Book Five" , genre:'Science ' , publish:2009 , edition:2014},
    {titel:"Book Six " , genre:'fiction' , publish:1987 , edition:2010}
]

 const userBooks1 = books.filter((bk) =>  {
    return bk.genre ===  'fiction'
 }
 )
 console.log(userBooks1);

 //              OR 

 // jab {} ka use karte hai to hame return karna padata hai  , par jav han nahi karte hai to to bhi value hai usako return nahi karna padata hai  ooo direct return ho jati hai ;
 const userBooks2 = books.filter((bk) =>
     bk.genre ===  'fiction'
 )
 console.log(userBooks2);



