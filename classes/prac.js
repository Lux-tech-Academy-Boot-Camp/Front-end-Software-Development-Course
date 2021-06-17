class User{
constructor(name,mail){
    this.jina =name;
    this.mail=mail;
}
greetings(){
    console.log(`hi ${this.jina} your email is ${this.mail}`)
}

}
let newUser = new User(`tim`,`tim@gmail.com`)
newUser.greetings()