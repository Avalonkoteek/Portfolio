const burger = $(".js-burger");
const nav = $(".js-nav-links");
const navLinks = $(".js-nav-link");
let burgerLines = burger.children(".menu-btn__line");

class StickyNavigation {
  constructor() {
    // burger click
    burger.click(() => {
      if (burger.hasClass("toggle")) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });

    // link click
    navLinks.click(function(event) {
      let element = $(this)
        .children("a")
        .attr("href");
      event.preventDefault();

      let scrollTop = $("#" + element).offset().top;

      if (burger.hasClass("toggle")) {
        nav.removeClass("nav-active");
        burger.removeClass("toggle");
        burgerLines.removeClass("menu-btn__line--toggle");
      }
      $("html, body").animate({ scrollTop: scrollTop }, 1000);
    });
    // scroll

    $(window).scroll(() => {
      this.onScroll();
    });
  }
  closeMenu() {
    nav.removeClass("nav-active");
    burger.removeClass("toggle");
    burgerLines.removeClass("menu-btn__line--toggle");
  }
  openMenu() {
    nav.addClass("nav-active");
    burger.addClass("toggle");
    burgerLines.addClass("menu-btn__line--toggle");
  }

  onScroll() {
    this.checkTabContainerPosition();
  }

  checkTabContainerPosition() {
    let offset = $("header").offset().top;
    if ($(window).scrollTop() > offset) {
      $(".js-nav").addClass("js-nav--top");
    } else {
      $(".js-nav").removeClass("js-nav--top");
    }
  }
}

new StickyNavigation();
