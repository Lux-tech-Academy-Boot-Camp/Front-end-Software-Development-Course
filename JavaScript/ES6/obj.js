let student = {

     fname: "Timothy",

     lname: "Agevi",

     adress:{
     	city: "Nairobi"
     }

} 


const {fname, lname, adress:{city}} = student; 

const output = `

my first name is ${fname}
my last name  is ${lname}
I live in ${city}

` 
console.log(output);
