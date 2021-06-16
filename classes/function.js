// function myArea(length,width){

//     this.length = length ;
//     this.width = width;
//      this.sum= this.width *this.width;
// }

// let shedArea = new myArea(10,30)

// console.log(shedArea)

        // Example 2

function myArea(radius,area){
    this.radius= radius;

    this.area = 22/7 * radius *radius;

}        

let hostel= new myArea(10)
let {area,radius} = hostel;
console.log(radius)