
// ________________________________________   Print Object by For in loop   _______________________________________
const myObject  = {
    js:'javaScript',
    cpp: 'C++' ,
    rb: 'ruby',
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(key);
    /*
    js
    cpp
    rb
    swift
    */
    
}
for (const key in myObject) {
    console.log(myObject[key]);     //   myObject[key]   mtb myobject ki value ;

    /*
    javaScript
    C++
    ruby
    swift by apple
    */
    
}

// other format 

for (const key in myObject) {
    console.log(`${key}  ----->  ${myObject[key]}`);
}
 
/* 

js  ----->  javaScript
cpp  ----->  C++
rb  ----->  ruby
swift  ----->  swift by apple

*/


// ______________________________________   can you use "For in loop " in the Array   _____________________________________
const programming= ["js" , "java", "py" ,"cpp"];
for (const key in programming) {
    console.log(`${key}  ------- >  ${programming[key]}`);
    
}
/*
0  ------- >  js
1  ------- >  java
2  ------- >  py
3  ------- >  cpp
*/


console.log("Other Exampal");
const map = new Map();
map.set('IN', "India")
map.set('USA' , "United Stae of America");
map.set('Fr' , "Franch")

for (const key in map) {
    console.log(key);
   // this is not print anythings because it is not iterable ;
}









































