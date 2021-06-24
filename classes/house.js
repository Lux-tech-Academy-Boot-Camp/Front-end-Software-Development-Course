class house{
    constructor(rooms,price,location){
        this.rooms=rooms;
        this.price=price;
        this.location=location;

    }
        display(){
           console.log(this.rooms,this.price,this.location) 
        }
    
}
let house1= new house(12,5000000,`Nai`);
house1.display()