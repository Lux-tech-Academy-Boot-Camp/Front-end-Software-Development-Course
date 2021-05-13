let showmenu  = document.querySelector(".menu");

function show() {
	showmenu.style.display = "block";
	showmenu.style.color="yellow";
} 

window.onclick = function(event) {
  if (event.target == showmenu ) {
    showmenu.style.display = "none";
  }
}