let academy = {
	name : "Lux Academy",
	location : "Thika",
	Duration :  1,
	students : [ "John", "Timothy", "Ester"]
}
//Accessing elements

/* 1).dot (.)  notation*/
console.log(academy.location); 

/* 2). square braces method */
console.log(academy["location"]);


//Updating values in objects

/* dot method */
academy.name  = "elevenfifty"; 

console.log(academy); 

/* dot method */
academy["name"] = "Lambda"; 

console.log(academy); 
