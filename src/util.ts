let navDiv = document.querySelector(".navdiv") as HTMLElement;
let bkHeader = document.querySelector(".name") as HTMLElement;
let body = document.querySelector("body") as HTMLElement;
let smallLogo = document.querySelector(".nav-left") as HTMLElement;
let navToggle = document.querySelector(".nav-toggle") as HTMLElement;
let navRight = document.querySelector(".nav-right") as HTMLElement;
let navbar = document.querySelector(".navbar") as HTMLElement;

let navMenu:HTMLElement = document.createElement("div");
navMenu.className = "nav-menu closed";
navMenu.innerHTML = `
    <a>Digital Art</a>
    <a>Traditional Art</a>
    <a>About Me</a>
    <a>Events</a>
`;
body.insertBefore(navMenu, body.firstChild);

let menuOpen:boolean = false;
navToggle.addEventListener("click", () => {
    if(menuOpen) closeMenu();
    else openMenu();
});

function openMenu() {
    navMenu.classList.remove("closed");
    menuOpen = true;
}

function closeMenu() {
    navMenu.classList.add("closed");
    menuOpen = false;
}

let isMobile:boolean;
if (body.getBoundingClientRect().width < 600) isMobile = true;
else isMobile = false;

bkHeader.addEventListener("click", () => {
    location.href = './';
})

smallLogo.style.top = (navbar.getBoundingClientRect().height / 2) + "px";
navRight.style.top = (navbar.getBoundingClientRect().height / 2) + "px";
navMenu.style.top = navbar.getBoundingClientRect().height + "px";