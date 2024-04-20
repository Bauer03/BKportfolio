"use strict";
let eventsCont = document.querySelector(".events-cont");
eventsCont.style.top = (navbar.getBoundingClientRect().height) + "px";
eventsCont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";
let events = [
    {
        title: "LuminoCity",
        desc: "This is the description of the event. It will be a paragraph or two long, and will describe the event in detail.",
        images: [
            'images/art/digital/image.jpeg',
            'images/art/digital/image.jpeg',
        ]
    },
    {
        title: "Art Show",
        desc: "This is the description of the event. It will be a paragraph or two long, and will describe the event in detail.",
        images: [
            'images/art/digital/image.jpeg',
            'images/art/digital/image.jpeg',
        ]
    },
];
for (let evt of events) {
    let temp = getEventHTML(evt);
    eventsCont.appendChild(temp);
    temp.addEventListener("click", () => {
        toggleSection(temp.children[0]);
    });
}
function toggleSection(toggleThis) {
    toggleThis.classList.toggle("open");
}
function getEventHTML(evt) {
    let temp = document.createElement("div");
    temp.className = "event";
    let imgGallery = [];
    evt.images.forEach((img) => {
        let tempImg = document.createElement("img");
        tempImg.className = "event-img";
        tempImg.src = `${img}`;
        imgGallery.push(tempImg);
    });
    temp.innerHTML = `
        <div class="event lumino-city">
            <div class="event-top">
                <div class="event-title">
                    ${evt.title}
                </div>
                <div class="section-toggle">
                    <span class="material-symbols-outlined lumino-toggle">expand_more</span>
                </div>
            </div>
            <div class="event-bottom" t="${evt.title}">
                <div class="event-image-gallery">
                    ${imgGallery}
                </div>
                <div class="event-desc">
                    ${evt.desc}
                </div>
            </div>
        </div>
    `;
    return temp;
}
