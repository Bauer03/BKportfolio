"use strict";
let leftImg = document.querySelector(".left-img");
let rightImg = document.querySelector(".right-img");
let cont = document.querySelector(".cont");
if (!cont)
    alert("cont does not exist");
if (leftImg) {
    leftImg.addEventListener("mouseenter", () => {
        cont.classList.add("hovering-left");
    });
}
if (leftImg) {
    leftImg.addEventListener("mouseleave", () => {
        cont.classList.remove("hovering-left");
    });
}
if (rightImg) {
    rightImg.addEventListener("mouseenter", () => {
        cont.classList.add("hovering-right");
    });
}
if (rightImg) {
    rightImg.addEventListener("mouseleave", () => {
        cont.classList.remove("hovering-right");
    });
}
