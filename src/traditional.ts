let traditionalCont = document.querySelector(".traditional-cont") as HTMLElement;

traditionalCont.style.top = (navbar.getBoundingClientRect().height) + "px";
traditionalCont.style.height = window.innerHeight - navbar.getBoundingClientRect().height + "px";