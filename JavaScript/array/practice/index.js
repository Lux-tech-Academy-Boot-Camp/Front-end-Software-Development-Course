let myArray=[`tim`,`ester`,`haron`,`john`]
const banner=document.querySelector(`.banner`)
const[name1,name2,name3,name4]=myArray

banner.innerHTML=` 
<p>${name1}</p>
<p>${name2}</p>
<p>${name3}</p>
<p>${name4}</p>
`


    // myArray.forEach( function(i){
    //     let newArray=i.charAt().toUpperCase() + i.slice(1) 
    //     banner.innerHTML=` 
    //     <p>${newArray}</p>
    //     <p>${newArray}</p>
    //     <p>${newArray}</p>
    //     <p>${newArray}</p>
    //     `
    // } )

    // app.forEach( function(i){
    
    // })