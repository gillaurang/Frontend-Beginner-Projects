var box = document.querySelector(".box")
var icon = document.querySelector("i")

box.addEventListener("dblclick", function(){
    icon.style.color = "red"
    icon.style.transform = "translate(-50%, -50%) scale(1)";

    setTimeout(function(){
        icon.style.transform = "translate(-50%, -50%) scale(0)";
    },1000)
})