"use strict";
let leftImg = document.querySelector(".left-img");
let rightImg = document.querySelector(".right-img");
let leftText = document.querySelector(".left-text");
let rightText = document.querySelector(".right-text");
let leftCont = document.querySelector(".left");
let cont = document.querySelector(".cont");
let rightCont = document.querySelector(".right");
cont.style.top = (navbar.getBoundingClientRect().height) + "px";
cont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";
if (isMobile) {
    leftText.style.left = (cont.getBoundingClientRect().width / 2) - (leftText.getBoundingClientRect().width / 2) + "px";
    rightText.style.left = (cont.getBoundingClientRect().width / 2) - (rightText.getBoundingClientRect().width / 2) + "px";
}
if (!isMobile) { // only making stuff animate if we're on mobile
    if (leftImg) {
        leftImg.addEventListener("mouseenter", () => {
            cont.classList.add("hovering-left");
        });
        leftImg.addEventListener("mouseleave", () => {
            cont.classList.remove("hovering-left");
        });
    }
    if (rightImg) {
        rightImg.addEventListener("mouseenter", () => {
            cont.classList.add("hovering-right");
        });
        rightImg.addEventListener("mouseleave", () => {
            cont.classList.remove("hovering-right");
        });
    }
}
leftImg.addEventListener("click", () => {
    location.href = "digital.html";
});
rightImg.addEventListener("click", () => {
    location.href = "traditional.html";
});
// Get the logo to follow the left hand div as it animates to the left or right.
let movingLogo = document.querySelector(".logo-large");
let leftRect;
function animate() {
    leftRect = leftCont.getBoundingClientRect();
    movingLogo.style.left = `${leftRect.right}px`;
    requestAnimationFrame(animate);
}
animate();
