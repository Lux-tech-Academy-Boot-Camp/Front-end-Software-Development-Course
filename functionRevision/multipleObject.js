 function myFunction(names,email) {
   
        this.names= names;
        this.email=email;
   

    
}
let john= new myFunction(`john`,`jow@gmail.com`);
let tim = new myFunction(`tim`,`tim@gmail.com`);
let francis = new myFunction(`frank`,`lampard@gmail.com`);
console.log(john,tim,francis)

