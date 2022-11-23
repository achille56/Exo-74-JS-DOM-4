//Votre code ci dessous
let theCat = document.getElementById("cat-pic");

function textMiaou () {
    document.getElementById("cat-chat").innerHTML = "Miaou";
}

theCat.addEventListener("click",function() {
    textMiaou();
    console.log(theCat);
})










