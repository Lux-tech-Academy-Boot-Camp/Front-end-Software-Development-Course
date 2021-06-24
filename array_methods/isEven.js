function isEven(num){
return num % 2 == 0;
}

let numbers = [1,23,47,48,19,16]

let even= numbers.find(element => isEven(element))

console.log(even)