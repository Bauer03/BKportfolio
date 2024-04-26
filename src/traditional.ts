let traditionalCont = document.querySelector(".traditional-cont") as HTMLElement;

traditionalCont.style.top = (navbar.getBoundingClientRect().height) + "px";
traditionalCont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";

let bigPaintingsBtn = document.querySelector("[type='paintings']") as HTMLElement;
let bigDrawingsBtn = document.querySelector("[type='drawings']") as HTMLElement;

const drawings: string[] = [
    "images/art/paintings/pt1.jpg",
    "images/art/paintings/pt2.jpg",
    "images/art/paintings/pt3.jpg",
];

type Project = {
    images: string[];
    name: string;
}

// Add the images for each project in the corresponding array.
let luminoCity: Project = {
    images: [
        "images/art/paintings/pt4.jpg",
        "images/art/paintings/pt2.jpg",
    ],
    name: "LuminoCity",
};
let abstractSneakers: Project = {
    images: [
        "images/art/paintings/pt2.jpg",
        "images/art/paintings/pt1.jpg",
    ],
    name: "Abstract Sneakers",
};
let morePaintings: Project = {
    images: [
        "images/art/paintings/pt3.jpg",
        "images/art/paintings/pt1.jpg",
    ],
    name: "More Paintings",
};

const PaintingSections: Project[] = [
    luminoCity,
    abstractSneakers,
    morePaintings,
];

// On click of one of these two, page is cleared. Then, one of the two sections is loaded in.

bigPaintingsBtn.addEventListener("click", () => {
    loadPaintings();
})
bigDrawingsBtn.addEventListener("click", () => {
    loadDrawings();
})

function loadPaintings() {
    clearDocument();
    
    let temp = document.createElement("div");
    temp.className = "t-project-cont has-projects";
    
    for (let p of PaintingSections) {
        temp.appendChild(getProjectElement(p.images,p.name));
    }

    traditionalCont.appendChild(temp);
}

function loadDrawings() {
    clearDocument();

    let temp = document.createElement("div");
    temp.className = "t-project-cont no-projects";

    for(let imgurl of drawings) {
        temp.appendChild(getImageElement(imgurl));
    }

    traditionalCont.appendChild(temp);
}

function clearDocument() {
    traditionalCont.className = "traditional-cont displaying";
    traditionalCont.innerHTML = `
        <div class="outer-left">
            <div>

            </div>
        </div>
    `;
}

function getProjectElement(project: string[], pname: string) {
    let temp = document.createElement("div");
    temp.className = "t-project";
    temp.innerHTML = `
        <div class="t-title fs-md">
            ${pname}
        </div>
        <div class="t-images">
        </div>
    `;

    for(let imgurl of project) {
        (temp.querySelector(".t-images") as HTMLElement).appendChild(getImageElement(imgurl));
    }

    return temp;
}

function getImageElement(imgurl:string) {
    let temp = document.createElement("div");
    temp.className = "t-img-cont";
    let temp2 = document.createElement("img");
    temp2.className = "t-img";
    temp2.src = imgurl;
    temp.appendChild(temp2);
    return temp;
}