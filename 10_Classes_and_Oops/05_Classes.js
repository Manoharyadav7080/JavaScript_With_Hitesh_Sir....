class User {
    constructor( username , email, password ) {
        this.username = username ;
        this.email  = email ; 
        this.password = password ;
    }


     encryptPassword() {
        return `${this.password}abc`;
        
    }
    ChangeUserName () {
        return `${this.username} `
    }
    
}
const  chai = new User('manohar yadav ' , 'yadavmanohar@98623gmail.com' , '87214');
console.log(chai.encryptPassword()); // 87214abc
console.log(chai.ChangeUserName()); // manohar yadav 


//___________________    behinde the sense  _________________

function user ( username , email, password ) {
    this.username = username;
    this.email= email ;
    this.password = password;
}
 
user.prototype.encryptPassword = function()  {
    return `${this.password}abc`;
}

user.prototype.ChangeUserName = ()  => {
    return `${this.username} `
}

const  tea = new User('tea' , 'tea@98623gmail.com' , '874234');
console.log(tea.encryptPassword()); // 874234abc
console.log(tea.ChangeUserName());  // tea 













