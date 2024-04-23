let navDiv = document.querySelector(".navdiv") as HTMLElement;
let bkHeader = document.querySelector(".name") as HTMLElement;
let body = document.querySelector("body") as HTMLElement;
let smallLogo = document.querySelector(".nav-left") as HTMLElement;
let navToggle = document.querySelector(".nav-toggle") as HTMLElement;
let navRight = document.querySelector(".nav-right") as HTMLElement;
let navbar = document.querySelector(".navbar") as HTMLElement;
let isMobile:boolean;

type ArtEvent = {
    title:string;
    desc:string;
    images:string[];
}

let events: ArtEvent[] = [
    {
        title: "LuminoCity",
        desc: "This is the description of the event. It will be a paragraph or two long, and will describe the event in some detail.",
        images: [
            'images/art/digital/Image.jpeg', // To add more images to an event, add the image to the 'images' folder and add the path on a new line.
            'images/art/paintings/painting1.png',
        ],
    },
    {
        title: "Art Show",
        desc: "This is the description of the event. It will be a paragraph or two long, and will describe the event in some detail.",
        images: [
            'images/art/digital/Image.jpeg',
            'images/art/paintings/painting1.png',
        ],
    },
];

let navMenu:HTMLElement = document.createElement("div");
navMenu.className = "nav-menu closed onload";
navMenu.innerHTML = `
    <span onclick="location.href='digital.html'">Digital Art</span>
    <span onclick="location.href='traditional.html'">Traditional Art</span>
    <span onclick="location.href='about.html'">About Me</span>
    <span onclick="location.href='events.html'">Events</span>
`;
body.insertBefore(navMenu, body.firstChild);

let menuOpen:boolean = false;
navToggle.addEventListener("click", () => {
    if(menuOpen) closeMenu();
    else openMenu();
});

function openMenu() {
    navToggle.classList.add("open");
    navToggle.textContent = "close";

    navMenu.classList.remove("closed");
    menuOpen = true;
}

function closeMenu() {
    navToggle.classList.remove("open");
    navToggle.textContent = "menu";

    navMenu.classList.add("closed");
    menuOpen = false;
}

if (body.getBoundingClientRect().width < 600) isMobile = true;
else isMobile = false;

if(!isMobile) {
    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && menuOpen) closeMenu();
    })
}

bkHeader.addEventListener("click", () => {
    location.href = './';
});

smallLogo.style.top = (navbar.getBoundingClientRect().height / 2) + "px";
navRight.style.top = (navbar.getBoundingClientRect().height / 2) + "px";
navMenu.style.top = navbar.getBoundingClientRect().height + "px";