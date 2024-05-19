

//  for loops 

for (let i = 0; i <= 10; i++) {
    console.log(i);
    
}

// Table printing 

for (let i = 2; i<=2 ;   i++) {
    for (let j = 1; j<=10; j++) {
        console.log(i +"*" + j + "=" +  (i*j) );  
    }
    
}

//  for loop with array 

let myArray = ["flash " , "banana" , "superman"] ;
console.log(myArray.length) ;// 3
for (let  i= 0;  i<=  myArray.length; i++) {
    console.log(myArray[i]);
    
}



// _____________________________________________________________________________

// break and continue 



console.log("break Statement _______________________")
for (let  index= 1;  index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`) ;
        break;
    }
    console.log(`value of i is ${index}`);
}

console.log("continue Statement _______________________")
for (let  index= 1;  index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`) ;
        continue;
    }
    if (index == 15) {
        console.log(`detected 15`) ;
        continue;
    }
    console.log(`value of i is ${index}`);
    
}