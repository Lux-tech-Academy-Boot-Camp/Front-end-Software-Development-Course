async function getUsers() {
    // let url = 'https://raw.githubusercontent.com/Lux-tech-Academy-Boot-Camp/Front-end-Software-Development-Course/main/JavaScript/profiledemo/users.json';
    // 
let url = `http://localhost:5000/getUsers`
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';

    users.map(user => {
        let htmlSegment = `<div class="user">
                             <img src="${user.profileURL}" >
                             <h2>${user.firstName} ${user.lastName}</h2>
                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                           </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();