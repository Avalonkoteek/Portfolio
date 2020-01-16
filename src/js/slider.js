var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 100,

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

var $body = $("body"),
  $wrapper = $(".panel"),
  $panel = $(".panel__content-col"),
  $pContent = $(".panel__content"),
  $img = $(".panel__img-col");

function initTilt() {
  TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

  $wrapper.mousemove(function(e) {
    tilt(e.pageX, e.pageY);
  });
}

function tilt(cx, cy) {
  var sxPos = ((cx / $wrapper.width()) * 100 - 50) * 100;
  var syPos = (cy / $wrapper.height()) * 10;
  TweenMax.to($pContent, 2, {
    rotationY: -0.03 * sxPos,
    rotationX: 0.03 * syPos,
    transformPerspective: 500,
    transformOrigin: "center center -400",
    ease: Expo.easeOut
  });
  TweenMax.to($img, 2, {
    rotationY: -0.03 * sxPos,
    rotationX: 0.03 * syPos,
    transformPerspective: 500,
    transformOrigin: "center center -200",
    ease: Expo.easeOut
  });
}

$body.mouseleave(function() {
  tilt($wrapper.width() / 2, $wrapper.height() / 2);
});

initTilt();

// slider.on('slideChange', function () {
//   TweenMax.to('.slide-text span', .2, {
//     y: '-100px',
//   })
//   TweenMax.to('.slide-number span', .2, {
//     x: '-100px',
//   })
//   TweenMax.to('.swiper-slide-active', .5, {
//     scale: .85
//   })
// })

// slider.on('slideChangeTransitionEnd', function () {

//   TweenMax.to('.slide-text span', .2, {
//     y: 0,
//     delay: .5
//   })
//   TweenMax.to('.slide-text span', 0, {
//     y: '100px',
//   })

//   TweenMax.to('.slide-number span', .2, {
//     x: 0,
//     delay: .7
//   })
//   TweenMax.to('.slide-number span', 0, {
//     x: '100px',
//   })

//   TweenMax.to('.swiper-slide-active', .5, {
//     scale: 1,
//     ease: Power4.easeOut,
//   })

//   TweenMax.to('.swiper-slide-active .slide-text', 0, {
//     autoAlpha: 1
//   })
//   TweenMax.to('.swiper-slide-active .slide-number', 0, {
//     autoAlpha: 1
//   })

//   TweenMax.to('.swiper-slide-next .slide-text', 0, {
//     autoAlpha: 0
//   })
//   TweenMax.to('.swiper-slide-prev .slide-text', 0, {
//     autoAlpha: 0
//   })

//   TweenMax.to('.swiper-slide-next .slide-number', 0, {
//     autoAlpha: 0
//   })
//   TweenMax.to('.swiper-slide-prev .slide-number', 0, {
//     autoAlpha: 0
//   })
// })

// TweenMax.to('.swiper-slide-next .slide-text', 0, {
//   autoAlpha: 0
// })
// TweenMax.to('.swiper-slide-prev .slide-text', 0, {
//   autoAlpha: 0
// })

// TweenMax.to('.swiper-slide-next .slide-number', 0, {
//   autoAlpha: 0
// })
// TweenMax.to('.swiper-slide-prev .slide-number', 0, {
//   autoAlpha: 0
// })

// TweenMax.to('.swiper-slide', 0, {
//   scale: .85,
// })

// TweenMax.to('.swiper-slide-active', 0, {
//   scale: 1,
// })
