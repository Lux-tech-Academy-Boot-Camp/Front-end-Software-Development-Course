let academy = {
	name : "Lux Academy",
	location : "Thika",
	Duration :  1,
	students : [ "John", "Timothy", "Ester"],
	
	getstudents : function(){
		this.students.forEach(student =>{
			console.log(student)
		})
	}
}

// console.log(academy.location)
// console.log("---------")
/* use () when callong methods in objects */ 
academy.getstudents();