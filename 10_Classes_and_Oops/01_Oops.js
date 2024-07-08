const user = {
    username :"manohar yadav",
    loginCount:8,
    signrdIn : true ,

    getuserDetails : function () {
        console.log("goot user details from database");
    
    }

}
console.log(user.username); // manohar yadav
console.log(user.getuserDetails()); // goot user details from database


function User(username , loginCount , isloggedIn) {
    this.username = username ,
    this.loginCount = loginCount,
    this.isloggedIn = isloggedIn




    this.greeting = function () {
        console.log(`wellcome ${this.username}`);
    }                                       
}

const userOne = new User("manohar Yadav" , 12 , true) ;
const userTwo = new User ("Hitesh" , 11 , false ) 
console.log(userOne ) // User { username: 'manohar Yadav', loginCount: 12, isloggedIn: true } 
console.log(userTwo) ; // User { username: 'Hitesh', loginCount: 11, isloggedIn: false } 
