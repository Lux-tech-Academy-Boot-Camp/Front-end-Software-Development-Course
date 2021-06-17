let grade = (marks)=>{
    if (marks>=70 && marks<=100){
        console.log(`A`)
    }else if (marks <70 && marks >=59){
            console.log(`B`)
    }else if (marks <59 && marks>40 ){
            console.log(`C`) 
        }
    else {
        console.log(`fail`) 
    }
}
grade(62)

// console.log(new Date()) soma