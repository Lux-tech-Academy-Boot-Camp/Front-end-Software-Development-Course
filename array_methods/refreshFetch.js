fetch('https://api.github.com/users/timothyAgevi', {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}
})
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors