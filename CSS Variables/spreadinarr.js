let student  = ["John", "Timothy", "Esther"];

// spread operators ...


let mystudent  = [ ...student];

student.push("Harun")
student.push("Mwenda")

let original  = [ ...student, 'Wanjiku', 'Agevi']
console.log(original);