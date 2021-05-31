/* Template Literals */
let fname  = `Harun`;
let lname  =  'Mbaabu';

const fname  = `${fname} ${lname}`;


/* Destructuring */ 
const player  = {
	name: 'Timothy',
	club: 'Agevi',
	adress:{
		city: "Nairobi"
	}
} 

const {name, club, adress:{city}} = player; 

console.log(`${name} lives in  ${city}`);