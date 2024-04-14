let navDiv = document.querySelector(".navdiv") as HTMLElement;
let body = document.querySelector("body") as HTMLElement;

let isMobile:boolean;
if (body?.getBoundingClientRect().width < 600) isMobile = true;
else isMobile = false;

navDiv.addEventListener("click", () => {
    location.href = '/';
})