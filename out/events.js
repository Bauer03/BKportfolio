"use strict";
let eventsCont = document.querySelector(".events-cont");
let luminoCity = document.querySelector(".lumino-city");
let luminoToggle = document.querySelector(".lumino-toggle");
let artShow = document.querySelector(".artshow");
let artShowToggle = document.querySelector(".artshow-toggle");
eventsCont.style.top = (navbar.getBoundingClientRect().height) + "px";
eventsCont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";
luminoToggle.addEventListener("click", () => {
    if (luminoCity.classList.contains("open")) {
        luminoCity.classList.remove("open");
        // luminoToggle.textContent = "close";
    }
    else {
        luminoCity.classList.add("open");
        // luminoToggle.textContent = "more";
    }
});
artShowToggle.addEventListener("click", () => {
    if (artShow.classList.contains("open")) {
        artShow.classList.remove("open");
        // artShowToggle.textContent = "close";
    }
    else {
        artShow.classList.add("open");
        // artShowToggle.textContent = "more";
    }
});
