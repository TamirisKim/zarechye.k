console.log('file 1');

let menuBtn = document.querySelector("[data-nav-toggler]");
let navbar = document.querySelector("[data-navbar]");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("close-btn");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("close-btn");
  navbar.classList.remove("active");
};





