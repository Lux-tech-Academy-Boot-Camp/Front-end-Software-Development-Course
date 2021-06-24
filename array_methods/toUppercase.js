let names= [`tim`,`ester`,`john`]
// let namesCapital =names.map(names=>names.toUpperCase())
// console.log(namesCapital)

let namesCapital=names.map(function (names){
  return  names.toUpperCase()
})
console.log(namesCapital)