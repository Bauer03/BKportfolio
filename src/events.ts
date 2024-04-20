let eventsCont = document.querySelector(".events-cont") as HTMLElement;
eventsCont.style.top = (navbar.getBoundingClientRect().height) + "px";
eventsCont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";

interface ArtEvent {
    title:String;
    desc:String;
    images:String[];
}

let events: ArtEvent[] = [
    {
        title: "LuminoCity",
        desc: "This is the description of the event. It will be a paragraph or two long, and will describe the event in detail.",
        images: [
            'images/art/digital/image.jpeg', // To add more images to an event, add the image to the 'images' folder and add the path on a new line.
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

for(let evt of events) {
    let temp = getEventHTML(evt);
    eventsCont.appendChild(temp);
    temp.addEventListener("click", () => {
        toggleSection(temp.children[0] as HTMLElement);
    })
}

function toggleSection(toggleThis:HTMLElement) {
    toggleThis.classList.toggle("open");
}

function getEventHTML(evt:ArtEvent) {
    let temp = document.createElement("div");
    temp.className = "event";
    let imgGallery: HTMLSpanElement[] = [];

    evt.images.forEach((img) => {
        let tempImg:HTMLImageElement = document.createElement("img");
        tempImg.className = "event-img";
        tempImg.src = `${img}`;
        imgGallery.push(tempImg);
    })

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