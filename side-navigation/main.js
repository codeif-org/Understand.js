console.log("added main.js");

// Sidenav overlay example

// Set the width of the side navigation to 30%
// function openNav() {
//     document.getElementById("mySidenav").style.width = "300px"
// }

// Set the width of the side navigation to 0
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0"
// }

// Sidenav push content example
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
  document.getElementById("openHam").style.opacity = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("openHam").style.opacity = "1";
  document.body.style.backgroundColor = "#f2f2f2";
}
