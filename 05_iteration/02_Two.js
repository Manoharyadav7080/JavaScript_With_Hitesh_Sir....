

//_________________________________   While loop    ______________________________________

let index =0;
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index +2 ;    
}


//_________________________________   while loop with Array     ______________________________________
let myArray= ['flash' , "batman" , "supperman"];
let arr = 0;
while (arr <myArray.length) {
    console.log(myArray[arr]);
    arr++;
}

/*
        flash
        batman
        supperman
*/


//_________________________________  do while     ______________________________________
// Summary:- phale work hoga for condation check hoga 


// let score =1;


// these is exception case ;  
let score =1;
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);

/*
    Code Explanation :- score ko tab tak print karo jab tak   score <= 10 hai 

    score is 1
    score is 2
    score is 3
    score is 4
    score is 5
    score is 6
    score is 7
    score is 8
    score is 9
    score is 10



    score is 11 ( phale ork hota hai fir condation check hota hi);
  
*/





































