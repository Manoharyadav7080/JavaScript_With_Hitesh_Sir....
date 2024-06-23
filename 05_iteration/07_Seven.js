
// map methods are return automatically 

const   myNumbers = [1,2,3,4,5,6,7,8,9,10];
 const newNumbers = myNumbers.map((num) => num+10 );
 console.log(newNumbers);
 /*
 [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
 
 */



// ________________________     Chaining methods     ___________________________


const newNums = myNumbers.map((num) => num*10).map((num) => num+1).filter((num) => num > 40);
console.log(newNums);
/*
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
  

// After adding filtte methods 
[
  41, 51,  61, 71,
  81, 91, 101
]
*/