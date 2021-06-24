class Profile{
    constructor(name,email,location,yob,cYear){
        this.name=name;
        this.email=email;
        this.location=location;
        this.yob=yob;
        this.cYear=cYear;
    }

        age(){
            return this.cYear -this.yob;
        }
}
let user1 = new Profile(`John`,`joendoe@gmail.com`,`nairobbery`,2000,2021)
console.log(user1.age())