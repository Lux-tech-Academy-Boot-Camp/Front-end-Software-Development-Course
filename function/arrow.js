// const name = ()=>{

// 	let fname  = "Harun"
// 	let lname = "Mbaabu"

// 	let fullname  = `${fname} ${lname}`
// 	console.log(fullname)
// } 

// name() 



let app = document.querySelector(".app");

let btn  = document.querySelector(".btn")


btn.addEventListener("click", change())


app.style.backgroundColor = "#000060"

const change = ()=>{
	app.style.backgroundColor = `black`;
}