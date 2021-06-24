let mydata = {
    title: "Simple",
    body: "Agevi learning JavaScript", 
    userId:1
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(mydata),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  
  .then(response => response.json()) 
  .then(json => console.log(json));
 