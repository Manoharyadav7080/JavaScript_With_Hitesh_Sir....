function SetUserName(username) {
    this.username= username ;

}

function CreateUserName ( username , email, password) {
    SetUserName.call(this , username );
    this.email = email ;
    this.password = password ;

}

const UserDetails  =  new CreateUserName ('manohar yadav ' , 'yadavmanohar6381@gmail.com' , '172@ljkasf') ;
console.log(UserDetails);