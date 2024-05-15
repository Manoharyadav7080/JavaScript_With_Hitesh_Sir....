
// ***************************************************  Merge two or more than array  in a single array  ****************************************************


const  marvel_heros = ["thor" , "Ironman" , "Spiiderman"];
const dc_heros = ["Superman" , "flash" , "batman"];



// Push methods 
marvel_heros.push(dc_heros);
console.log(marvel_heros); // [ 'thor', 'Ironman', 'Spiiderman', [ 'Superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);//flash
console.log(marvel_heros[1]) ; //Ironman


// Concatinate Methods 
 const allHeros =  marvel_heros.concat(dc_heros);
console.log(allHeros); // ['thor', 'Ironman', 'Spiiderman', 'Superman', 'flash', 'batman']



// *****************************************************           Spread(फैलाना) operator               *********************************************************

//  Other Easy methods cancatinate two array  then  use karte hai Spread(फैलाना) operator;

const all_new_hheros = [...marvel_heros, dc_heros]; // element are spread (array ki faila diya gya hai ) and collect by the all_new_hheros;
console.log(all_new_hheros); //['thor', 'Ironman', 'Spiiderman', 'Superman', 'flash', 'batman']


// rarely case me  use  hota hai 

const another_arr = [1,2,3,[4,5,6],7,[6,7[4,5]]];// how to handal this;
const real_another_arr = another_arr.flat(Infinity) //  both are but don't always use this methods.
console.log(real_another_arr);
const real_another_arr1 = another_arr.flat(3) //  always this method are prefers (kitna defth tak jana hai mtb arr ke andar array fir usake andar array
console.log(real_another_arr1)

// ********************    .isArray methods ************************************************

console.log(Array.isArray("Manohar Yadav"));


//  ************************************   .from methods   *****************************************

console.log(Array.from("manohar yadav"));
console.log(Array.from({name:"manohar"})); // interesting concept return []  because esako batan padega ki key ke behave par array banaye ki value ke vehave par ;


// **************************************       .of methods     **************************************************
let score1 =100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]


















