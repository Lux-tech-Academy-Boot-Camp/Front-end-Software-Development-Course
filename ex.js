async function fetchText() {
    let response = fetch('/non-existence.txt');

    console.log(response.status); // 400
    console.log(response.statusText); // OK 


    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}

fetchText();