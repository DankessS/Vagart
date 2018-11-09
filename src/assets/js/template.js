function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("icon-open").style.display = "none";
  let x = document.getElementById("mySidenav");
  if (x.className === "sidenav") {
    x.className += " responsive";
  } else {
    x.className = "sidenav";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("icon-open").style.display = "flex";
  let x = document.getElementById("mySidenav");
  if (x.className === "sidenav") {
    x.className += " responsive";
  } else {
    x.className = "sidenav";
  }
}
