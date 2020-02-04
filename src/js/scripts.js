let $container = $(".js-mousemove3d__wrapper");

if (window.screen.width >= 786) {
  $container.each(function() {
    let $body = $("body"),
      $wrapper = $("header"),
      $contentBox = $(".js-mousemove3d"),
      $text = $(".js-mousemove3d__text");

    function initTilt() {
      TweenMax.set([$contentBox, $text], { transformStyle: "preserve-3d" });

      $wrapper.mousemove(function(e) {
        tilt(e.pageX, e.pageY);
      });
    }

    function tilt(cx, cy) {
      var sxPos = (cx / $wrapper.width()) * 100 - 50;
      TweenMax.to($contentBox, 2, {
        rotationY: -0.03 * sxPos,
        transformPerspective: 500,
        transformOrigin: "center center -400",
        ease: Expo.easeOut
      });
    }

    $body.mouseleave(function() {
      tilt($wrapper.width() / 2, $wrapper.height() / 2);
    });

    initTilt();
  });
}
