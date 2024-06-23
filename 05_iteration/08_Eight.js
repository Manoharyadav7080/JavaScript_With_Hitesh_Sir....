
//___________________________________    JavaScript Array reduce()    ____________________________
/**
 Description
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.
 */


const myNums= [10,20,30] ;
// function(accumulator , currentvalue)
const myTotal = myNums.reduce (function(acc , currval) {
    console.log(`acc:${acc} and currval :${currval}`)
    /**
    acc:0 and currval :1
    acc:1 and currval :2
    acc:3 and currval :3 
     */
    return acc+currval;
}, 0)

// 0 mens that start kha se karna hai 
console.log(myTotal); // Output ---> 6



// ________________________________   Exampal of  reduce() methods                  __________________________________________
 
const myTotal1 =  myNums.reduce((acc, curr) => acc+curr , 0);
console.log(myTotal1); // 60

// Exampal :- 

const shoppingCart = [
    {
        itemsName:'js course',
        price :2999
    },
    {
        itemsName:'python',
        price :5999
    },
    {
        itemsName:'data Science course',
        price :12999
    }
]

 const  totalprice = shoppingCart.reduce((acc , item) => acc + item.price , 0);
console.log(totalprice); // 21997


































