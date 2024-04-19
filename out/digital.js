"use strict";
let digitalCont = document.querySelector(".digital-cont");
digitalCont.style.top = (navbar.getBoundingClientRect().height) + "px";
digitalCont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";
