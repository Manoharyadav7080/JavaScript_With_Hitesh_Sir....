class User {
    constructor(username) {
    this.username = username ;
    }

    logMe() {
        console.log(`UserName is : ${this.username}`);

    }

     static createId() {
        console.log('123');
    }


}

const manohar = new User('Manohar Yadav');
// manohar.createId(); // 123  when logMe is not static 

class Teacher extends User{
    constructor(username , email ) {
        super(username);
        this.email = email ;
       

    }


}

const  iphone = new Teacher('iphone ', 'i@phone.com' );
iphone.logMe(); // UserName is : iphone 
// iphone.createId();  // this is not Accsess 

 

















