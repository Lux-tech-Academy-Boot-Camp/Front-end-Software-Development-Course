var root = document.querySelector(':root');


var rootStyles = getComputedStyle(root);


var red = rootStyles.getPropertyValue('--yellow');

console.log(`Yellow color style is  : ${red}`);

root.style.setProperty('--red', 'black') 


// console.log(rootStyles);