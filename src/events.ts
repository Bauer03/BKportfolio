let eventsCont = document.querySelector(".events-cont") as HTMLElement;
eventsCont.style.top = (navbar.getBoundingClientRect().height) + "px";
eventsCont.style.minHeight = window.innerHeight - navbar.getBoundingClientRect().height + "px";

for(let evt of events) {
    let temp = getEventHTML(evt);
    eventsCont.appendChild(temp);
    temp.addEventListener("click", (event) => {
        let obj = event.target as HTMLElement;
        if(!(obj.classList.contains("nT"))){
            toggleSection(temp as HTMLElement);
        }
    });
}

function toggleSection(toggleThis:HTMLElement) {
    let temp = toggleThis.querySelector(".toggle") as HTMLElement;
    temp.textContent = toggleThis.classList.contains("open") ? "expand_more" : "expand_less";
    temp.classList.toggle("rotate");
    toggleThis.classList.toggle("open");
}

function getEventHTML(evt:ArtEvent) {
    let temp = document.createElement("div");
    temp.className = "event";
    let imageIndex:number = 0;

    temp.innerHTML = `
        <div class="event-top">
            <div class="event-title">
                ${evt.title}
            </div>
            <div class="section-toggle">
                <span class="material-symbols-outlined toggle">expand_more</span>
            </div>
        </div>
        <div class="event-bottom">
            <div class="event-image-gallery nT">
                <span class="material-symbols-outlined nT go-left">arrow_left</span>
                <img src="${evt.images[imageIndex]}" class="nT event-img">
                <span class="material-symbols-outlined nT go-right">arrow_right</span>
            </div>
            <div class="event-desc">
                ${evt.desc}
            </div>
        </div>
    `;

    let img = temp.querySelector(".event-img") as HTMLImageElement;

    let right = temp.querySelector(".go-right") as HTMLElement;
    right.addEventListener("click", (event) => {
        imageIndex = imageIndex < (evt.images.length - 1) ? imageIndex + 1 : 0;
        swapImg(img,evt.images[imageIndex]);
    })

    let left = temp.querySelector(".go-left") as HTMLElement;
    left.addEventListener("click", (event) => {
        imageIndex = imageIndex > 0 ? imageIndex - 1 : (evt.images.length - 1);
        swapImg(img,evt.images[imageIndex]);
    })

    return temp;
}

function swapImg(img:HTMLImageElement,imgURL:String) {
    img.src = imgURL as string;
}