


let grid = $(".grid");
let gridLine = grid.children(".grid__line");
console.log(gridLine);

getLightLine();






function getLightLine(){
let $lightLine = $("<div class='lightLine'></div>");
gridLine.append($lightLine);
}
function removea(){
    let $lightLine  = $(".lightLine");
    $lightLine.removeClass("lightLine--active")
}
function animateLine(){
    console.log("chf,jnfkj");
    let $lightLine  = $(".lightLine");
    $lightLine.addClass("lightLine--active")
}