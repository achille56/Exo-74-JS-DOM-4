let catPic = document.getElementById("cat-pic");
let onCatClick = function(e) {
    let stashePic = document.getElementById("mustache-pic");
    stashePic.style.top = e.clientY -20 + "px";
    stashePic.style.left = e.clientX -50 + "px";

};

catPic.addEventListener("click", onCatClick);








