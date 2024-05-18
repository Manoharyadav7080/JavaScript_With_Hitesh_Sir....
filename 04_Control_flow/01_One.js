


//  ************************************            if               *******************************************
const isUserloggedIn = true ;
if (isUserloggedIn) {
    console.log("True"); // True
}

if ( 2 === "2") {
    console.log(" equal")
}else {
    console.log("Not equal");
}

const temprature = 41;
if (temprature > 50 ) {
    console.log("greater  than 50")
} else {
    console.log("less than 50")
}
console.log("Executed");

//__________________________________________________________________________________________________


const score =200;
if (score >100) {
    const power = "fly" ;
    console.log(`user power: ${power}`);
}

//__________________________________________________________________________________________________
// Basic if else Conditions 

const balance = 1000;
if (balance > 500) console.log("test"); // this type code allow in javaScript 

// other type Statement

if (balance <500) {
    console.log("less than 500") ;
} else if (balance <750) {
    console.log("less than 750");
} else if (balance <900) {
    console.log("less than 900")
} else if (balance < 1200) {
    console.log("less than 1200")

}else {
    console.log("grater than 1200")
}

//_____________________________________________________________________________________

const userloggedIn = true ;
const debitCard = true ;

if (userloggedIn && debitCard ) {
    console.log("Allow to buy Course ");

}

if (userloggedIn && debitCard && 2==3 ) {
    console.log("Allow to buy Course ");
    
}else{
    console.log("not allow to buy course ")
}
 

//____________________________________________________________________________________________

const loggedInFromGoogle = false ;
const loogedInFromEmail = true ;

if (loogedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in")
}




































//  <, > , <= , >= , == ,!= , === 