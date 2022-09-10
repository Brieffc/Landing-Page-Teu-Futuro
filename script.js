"use strict";

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

//header active

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


//carrossel

  let time = 2500;
  let currentImageIndex = 0;
  let images = document.querySelectorAll("#slider img");
  let max = images.length;


function nextImage() {

  images[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if(currentImageIndex >= max){
    currentImageIndex = 0;
  }

  images[currentImageIndex].classList.add("selected");
}


function start(){
  setInterval(() => {
    nextImage();
  }, time)
}

window.addEventListener("load", start)