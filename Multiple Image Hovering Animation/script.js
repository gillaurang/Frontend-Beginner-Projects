var container = document.querySelectorAll(".elem")
var h2 = document.querySelectorAll('.elem h2')

container.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.childNodes[5].style.opacity = 1
        val.childNodes[5].style.boxShadow = "0px 0px 20px 0px black";
        val.childNodes[1].style.backgroundColor = "#545aff"
        val.childNodes[1].style.color = "white"
        val.childNodes[1].style.border = "2px solid white"
    });

    val.addEventListener("mouseleave", function(){
        val.childNodes[5].style.opacity = 0
        val.childNodes[1].style.backgroundColor = "white"
        val.childNodes[1].style.color = "#545aff"
        val.childNodes[1].style.border = "2px solid #545aff"
    }); 

    val.addEventListener("mousemove", function(dets){
        val.childNodes[5].style.left = dets.x + "px"
        val.childNodes[5].style.top = dets.y + "px"
    })

})