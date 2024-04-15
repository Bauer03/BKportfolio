"use strict";
let navDiv = document.querySelector(".navdiv");
let body = document.querySelector("body");
let smallLogo = document.querySelector(".nav-left");
let navToggle = document.querySelector(".nav-toggle");
let navRight = document.querySelector(".nav-right");
let navbar = document.querySelector(".navbar");
let isMobile;
if ((body === null || body === void 0 ? void 0 : body.getBoundingClientRect().width) < 600)
    isMobile = true;
else
    isMobile = false;
navDiv.addEventListener("click", () => {
    location.href = '/';
});
smallLogo.style.top = (navbar.getBoundingClientRect().height / 2) + "px";
navRight.style.top = (navbar.getBoundingClientRect().height / 2) + "px";
