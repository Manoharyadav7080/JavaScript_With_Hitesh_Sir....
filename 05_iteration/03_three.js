
// for of    , this are all array spacific loop ;

// ["" , "" , ""];
// [{} , {} , {} , {}] ;



// _________________________________________    for of  loop with arr    _______________________________________________

const arr = [1,2,3,4,5,6];
for (const index of arr) {  // use itarable  of index or functions
    console.log(index);
}
// Answer :- 👇🏾
/*
        1
        2
        3
        4
        5
        6

Summary of  this code :-    index or itrable  ek variable jo index ko represent kar rha  hai  hai and 
                            arr bhi ek variable hai jo  esaka  " [1,2,3,4,5,6]" address stor kiya hai ;



*/



// _________________________________________________  for of loop  with string     _______________________________________________________


const greetings = "hello world!" ;
for (const greet of greetings) {
    if (greet === " ") {
        continue;
    }
    console.log( `every char is =>  ${greet}`);
}

/*
every char is =>  h
every char is =>  e
every char is =>  l
every char is =>  l
every char is =>  o
every char is =>  w
every char is =>  o
every char is =>  r
every char is =>  l
every char is =>  d
every char is =>  !


 */

// _______________________________________      maps   (same as  arr)         __________________________________

// map :- the map object holds key-value pair and remembers the original insertion order of the keys . key in the  map may only occur once ,it is unque in the map's collection.


const map1 = new Map(); 
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1);  // return objects 

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2



//  ____________________________        is print map key and value ;     ___________________________________________

for (const key of map1) {
    console.log(key);
}
/*
return :- 
            [ 'a', 1 ]
            [ 'b', 2 ]
            [ 'c', 3 ]

*/


// shortcut print elements of objects 
for (const [key, value] of map1) {
    console.log(key , `:-` , value );
}

/*
Return :- 
            a :- 1
            b :- 2
            c :- 3

*/



// _________________________________       is print objects  ?    _________________________________
 
const myObjects = {
    'game1' : 'NFS' ,
    'game2'  :  "spiderman",
     'game3'  : "ironman" ,
     'game4' : "shaktiman"
}

for(const  [key , value] of myObjects) {
    console.log(key , ` :` , value);
}

// error :- myObjects is not iterable 
























