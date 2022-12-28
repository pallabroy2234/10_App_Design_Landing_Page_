// ! Scroll Navbar Fixed

let nav = document.querySelector(".navigation-wrapper");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// ! Navbar hide

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((e) => {
  e.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// ! Counter

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      incriment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current = current + incriment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 10, 2000);
  counter("count2", 0, 20, 3000);
  counter("count3", 0, 30, 2500);
  counter("count4", 0, 10, 3000);
});

// ! screenshorts Slider

let swiper = new Swiper(".swiper-container.app-screen", {
  effect: "coverflow",
  loop: true,
  autoplaySpeed: 3000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    dealy: 5000,
    disableOnInteraction: false,
  },
  coverflow: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  paginationClickable: true,
});
