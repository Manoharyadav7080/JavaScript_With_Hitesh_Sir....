const name = "Manohar Yadav";
const repoCount = 50 ;
console.log(name+ repoCount +"value");

//  backtics
console.log(`hello my name ${name} and my rep count is  ${repoCount}`);

// Other methods

const gameName =new String ('Hii-Manohar-yadav');
console.log(gameName[4]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());// don't change mane  string 
console.log(gameName);
console.log(gameName.charAt(0)); // finde value by the index
console.log(gameName.indexOf('h'));  // find  index by value 

// substring(start , end)
const newString = gameName.substring(1,4);
console.log(newString);


//slice (start  , end );  allow negative value 
//  trim()   ;-  the trim() methods remove whiteSpace from both ends of a string and return a new string , without modifying the original string 
// replace(" replace of " , " replace by this string ");
//  name.includes('Yadav') // true ( find this charector present in Namme String)
// name.includes('Kumar') // false 


// By MDN website 
console.log(gameName.split('-')) ; //  split('saprator')  or split('saprator ' , 'limit')   // return arr;
const str = 'The quick brown fox jump over the lagy dog';

const words = str.split(' ');  // split based on space 
console.log(words[3]); // fox

const chars = str.split('') ;
console.log(chars[8]) // k

const strCoppy = str.split();
console.log(strCoppy); // [ 'The quick brown fox jump over the lagy dog' ]























