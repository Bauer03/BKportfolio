"use strict";
let navDiv = document.querySelector(".navdiv");
let bkHeader = document.querySelector(".name");
let body = document.querySelector("body");
let smallLogo = document.querySelector(".nav-left");
let navToggle = document.querySelector(".nav-toggle");
let navRight = document.querySelector(".nav-right");
let navbar = document.querySelector(".navbar");
let navMenu = document.createElement("div");
navMenu.className = "nav-menu closed";
navMenu.innerHTML = `
    <a>Digital Art</a>
    <a>Traditional Art</a>
    <a>About Me</a>
    <a>Events</a>
`;
body.insertBefore(navMenu, body.firstChild);
let menuOpen = false;
navToggle.addEventListener("click", () => {
    if (menuOpen)
        closeMenu();
    else
        openMenu();
});
function openMenu() {
    navMenu.classList.remove("closed");
    menuOpen = true;
}
function closeMenu() {
    navMenu.classList.add("closed");
    menuOpen = false;
}
let isMobile;
if (body.getBoundingClientRect().width < 600)
    isMobile = true;
else
    isMobile = false;
bkHeader.addEventListener("click", () => {
    location.href = '/';
});
smallLogo.style.top = (navbar.getBoundingClientRect().height / 2) + "px";
navRight.style.top = (navbar.getBoundingClientRect().height / 2) + "px";
navMenu.style.top = navbar.getBoundingClientRect().height + "px";
