"use strict";
let aboutCont = document.querySelector(".a-cont");
aboutCont.style.top = (navbar.getBoundingClientRect().height) + "px";
aboutCont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";
