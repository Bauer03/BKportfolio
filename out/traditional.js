"use strict";
let traditionalCont = document.querySelector(".traditional-cont");
traditionalCont.style.top = (navbar.getBoundingClientRect().height) + "px";
traditionalCont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";
