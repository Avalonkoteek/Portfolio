let HeaderGrid = $("header").find(".grid");
let gridLine = HeaderGrid.children(".grid__line");
let $lightLine = $("<div class='lightLine'></div>");
gridLine.append($lightLine);

let gridTimer = setInterval(() => {
  console.log($(".lightLine")[0]);
  $(".lightLine").addClass("lightLine--active");
  $(".lightLine:first").removeClass("lightLine--active");
  setTimeout(() => {
    $(".lightLine").removeClass("lightLine--active");
  }, 2000);
}, 8000);
