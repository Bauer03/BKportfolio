"use strict";
let navDiv = document.querySelector(".navdiv");
let body = document.querySelector("body");
let isMobile;
if ((body === null || body === void 0 ? void 0 : body.getBoundingClientRect().width) < 600)
    isMobile = true;
else
    isMobile = false;
navDiv.addEventListener("click", () => {
    location.href = '/';
});
