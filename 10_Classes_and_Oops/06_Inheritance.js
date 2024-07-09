class User {
    constructor(username) {
    this.username = username ;
    }

    logMe() {
        console.log(`UserName is : ${this.username}`);

    }

}

class Teacher extends User {
    constructor (username , email, password) {
        super(username);
        this.email = email;
        this.password = password;

    }

    addCourse () {
        console.log(`a new course was  added by  ${this.username}`); 
    }

}

const chai = new Teacher('manohar yadav ' , 'yadavmanohar87324@gmail.com' , "98241");
console.log(chai.logMe()); // UserName is : manohar yadav  
console.log(chai.addCourse()); //  a new course was  added by  manohar yadav



const masalaChai = new User('MasalaChai');
// console.log(masalaChai.addCourse()); // Not accsess 
masalaChai.logMe()// // UserName is : MasalaChai 


// ___________________________    Testing of addaress _____________________

console.log (chai == masalaChai); // false

console.log(chai == Teacher); // false

console.log(chai instanceof Teacher) ; // true






























