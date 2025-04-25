var btn = document.querySelector(".btn")
var istatus = document.querySelector("h5")
var check = document.querySelector("p")
var flag = 0;

btn.addEventListener("click",function(){
    if(flag == 0){
        istatus.innerHTML = "Friends"
        check.textContent = "Happy Friends"
        istatus.style.color = "Green"
        btn.style.backgroundColor = "white"
        flag = 1
    }else{
        istatus.innerHTML = "Stranger"
        check.textContent = "Friend Suggestion"
        istatus.style.color = "Red"
        btn.style.backgroundColor = "#3D90D7"
        flag = 0
    }    
})