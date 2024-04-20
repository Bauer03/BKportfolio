let eventsCont = document.querySelector(".events-cont") as HTMLElement;
let luminoCity = document.querySelector(".lumino-city") as HTMLElement;
let luminoToggle = document.querySelector(".lumino-toggle") as HTMLElement;
let artShow = document.querySelector(".artshow") as HTMLElement;
let artShowToggle = document.querySelector(".artshow-toggle") as HTMLElement;

eventsCont.style.top = (navbar.getBoundingClientRect().height) + "px";
eventsCont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";

luminoToggle.addEventListener("click", () => {
    if(luminoCity.classList.contains("open")) {
        luminoCity.classList.remove("open");
        // luminoToggle.textContent = "close";
    } else {
        luminoCity.classList.add("open");
        // luminoToggle.textContent = "more";
    }
});

artShowToggle.addEventListener("click", () => {
    if(artShow.classList.contains("open")) {
        artShow.classList.remove("open");
        // artShowToggle.textContent = "close";
    } else {
        artShow.classList.add("open");
        // artShowToggle.textContent = "more";
    }
});