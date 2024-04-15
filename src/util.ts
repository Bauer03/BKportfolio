let navDiv = document.querySelector(".navdiv") as HTMLElement;
let body = document.querySelector("body") as HTMLElement;
let smallLogo = document.querySelector(".nav-left") as HTMLElement;
let navToggle = document.querySelector(".nav-toggle") as HTMLElement;
let navRight = document.querySelector(".nav-right") as HTMLElement;
let navbar = document.querySelector(".navbar") as HTMLElement;

let isMobile:boolean;
if (body?.getBoundingClientRect().width < 600) isMobile = true;
else isMobile = false;

navDiv.addEventListener("click", () => {
    location.href = '/';
})

smallLogo.style.top = (navbar.getBoundingClientRect().height / 2) + "px";
navRight.style.top = (navbar.getBoundingClientRect().height / 2) + "px";