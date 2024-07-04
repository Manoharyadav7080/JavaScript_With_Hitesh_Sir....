
//fetch('https://somthing.com').then().catch().finally();
// promise  are handle by two type :- ".then .catch" and "Async/await"

// ________________________________    Write a promise code in First Way     ____________________________

const promiseOne =  new Promise(function(resolve, reject) {
    // Do an async task 
    // Db calls , cryptography , network 

    setTimeout( function () {
        console.log('async task is completed');
    }, 1000)
   

}) 
promiseOne.then(function() {
    console.log("promise Consumed");
})


// _____________________________________      Write a promise code in  second way     ____________________________        
//   jab promise  ko kisi variable me store nahi kiye rhange to to usame direct .then ka use kar  lenge 


new Promise(function(resolve , reject ) {

    setTimeout(() => {
        console.log('Async task  2')
        resolve(); // it is main thigs. because without useing not pass a data of .then methods ; 
    }, 1000);

}).then(() => {
    console.log("async 2  resolved")
})



//   _____________________   Third Way (Create a promises ) ____________________-

 const promiseThird = new Promise(function (resolve , reject) {

    setTimeout(  () => {
        resolve({username :"manohar" , email:"yadavmanohar" }); // by this any Object OR any data bhi return kar sakte hai ;

    }, 2000)

 }) 

 promiseThird.then( (user) => {
    console.log(user);
 }) 


 //   _____________________   Four Way (Create a promises ) ____________________-


 const promiseFour = new Promise(function(resolve , reject) {

    setTimeout( function ()  {
        let  error =  false ;  //  
        if(!error) {
            resolve( {username :"Vijay Yadav" , password:"123"} );
        } else {
            reject('ERRROR : somthing went worng');
        }

    }, 2000);
 })

.then( (user) => {

    // console.log(user.username);//  this is give a ERROR
    console.log(user); 
     return user.username // direct yaha nahi print kara sakte hai Error dega ;
})
.then(function(username ){
    console.log(username);
}) 
.catch( function (error) {
    console.log(error);
})

// Note 
/**
 
 error = true 
 Output :- ERRROR : somthing went worng

 error = false 
 Output :- Vijay Yadav

 */
 .finally(() => {
    console.log("finally promises is  neither  resolved or rejected");
 })






//                      .then .catch .finally               OR                    Async/ await








 //___________________________     Five Way (Create a promises  with a  Async/await )       ___________________________


 const promiseFive = new Promise(function(resolved , reject) {
    setTimeout(() => {
        let error = false ;
        if (!error) {
            resolved( {username : "javaScript" , password:"123"});
        } else {
            reject('Error : js went wrong');
        }

    }, 1000);
 })

 async function ConsumePromiseFive () {
    try {
        const response = await promiseFive   
        console.log(response);
    } catch (error) {
        console.log(error);
    }
   
 }
 ConsumePromiseFive();

 /*
 
 if error = false ;
 Output :- { username: 'javaScript', password: '123' }


 if error = true ;
 output :- Error : js went wrong
 
 
 */



 // -----------------------------------------------------------------------------------------
// This is Example (1st useing a Async/await)


 async function getAllUser() {
    try {
        const responds = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await responds.json();
        console.log(data); 
    } catch (error) {
        console.log( "E:" ,error);
    }
 }

 getAllUser();



 // Exampale (2nd using by .then .catch )

fetch('https://api.github.com/users/Manoharyadav7080')
.then( (response) => {
    return response.json();
})
.then((data)=> {
    console.log(data);
})
.catch( (error) => {
    console.log(error);

})
.finally(()=> {
    console.log("All code run successfully");
})

/*

chuki yaha direct featch ho rha hai to call karne  ki bhi need nahi hai ;



*/

  



























































































































