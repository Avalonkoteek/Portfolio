
const navSlide = () => {
  // get DOM elements
  let burger = document.querySelector(".js-burger");
  let burgerLines = burger.querySelectorAll(".menu-btn__line")
  let nav = document.querySelector(".nav-links");
// add event
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    burgerLines.forEach(el =>{
      el.classList.toggle("menu-btn__line--toggle");
    })

  });
};

navSlide();


