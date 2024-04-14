let leftImg = document.querySelector(".left-img") as HTMLImageElement;
let rightImg = document.querySelector(".right-img") as HTMLImageElement;
let cont = document.querySelector(".cont") as HTMLElement;
let leftText = document.querySelector(".left-text") as HTMLElement;
let rightText = document.querySelector(".right-text") as HTMLElement;
let navbar = document.querySelector(".navbar") as HTMLElement;
let leftCont = document.querySelector(".left") as HTMLElement;
let rightCont = document.querySelector(".right") as HTMLElement;

cont.style.top = (navbar.getBoundingClientRect().height) + "px";

if(isMobile) {
    leftText.style.left = (cont.getBoundingClientRect().width / 2) - (leftText.getBoundingClientRect().width / 2) + "px";
    rightText.style.left = (cont.getBoundingClientRect().width / 2) - (rightText.getBoundingClientRect().width / 2) + "px";
}

if(!isMobile) { // only making stuff animate if we're on mobile
    if(leftImg) {
        leftImg.addEventListener("mouseenter", () => {
            cont.classList.add("hovering-left");
        });
        leftImg.addEventListener("mouseleave", () => {
            cont.classList.remove("hovering-left");
        });
    }
    if(rightImg) {
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

cont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";