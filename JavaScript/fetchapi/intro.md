## **JavaScript Fetch API.**

The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers. 

In addition, the Fetch API is much simpler and cleaner. It uses the Promise to deliver more flexible features to make requests to servers from the web browsers.

The fetch() method is available in the global scope that instructs the web browsers to send a request to a URL.

**Sending a Request.**

The fetch() requires only one parameter which is the URL of the resource that you want to fetch: 

```javascript
let response = fetch(url); 
```

The **fetch()** method returns a Promise so you can use the then() and catch() methods to handle it: 

```javascript
fetch(url)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });
``` 

When the request completes, the resource is available. At this time, the promise will resolve into a Response object.


The Response object is the API wrapper for the fetched resource. The Response object has a number of useful properties and methods to inspect the response. 


**Reading the Response.**

If the contents of the response are in the raw text format, you can use the text() method. The text() method returns a Promise that resolves with the complete contents of the fetched resource: 

```javascript
fetch('/readme.txt')
    .then(response => response.text())
    .then(data => console.log(data)); 

``` 

In practice, you often use the async/await with the fetch() method like this:

```javascript
async function fetchText() {
    let response = await fetch('/readme.txt');
    let data = await response.text();
    console.log(data);
} 
``` 

Besides the text() method, the Response object has other methods such as json(), blob(), formData() and arrayBuffer() to handle the respective type of data. 



**Handling the status codes of the Response.**

The Response object provides the status code and status text via the status and statusText properties.

When a request is successful, the status code is 200 and status text is OK:

```javascript
async function fetchText() {
    let response = await fetch('/readme.txt');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}

fetchText();
````

**Output:**

```html
200
OK
```

If the requested resource doesn’t exist, the response code is **404**:

```javascript
let response = await fetch('/non-existence.txt');

console.log(response.status); // 400
console.log(response.statusText); // OK
```

**Output:**

```html
400
Not Found
```

If the requested URL throws a server error, the response code will be 500.

If the requested URL is redirected to the new one with the response 300-309, the status of the Response object is set to 200. In addition the redirected property is set to true.

The fetch() returns a promise that rejects when a real failure occurs such as a web browser timeout, a loss of network connection, and a CORS violation.


## **Example.**