const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - prev > delay) {
        prev = now;
        return func(...args);
      }
    };
  };
document.querySelector('.center')
.addEventListener("mousemove", throttleFunction((dets) => {
    // console.log("button is clicked");
   var div =  document.createElement('div')
   div.classList.add('imagediv')
   div.style.left = dets.clientX + "px"; 
   div.style.top = dets.clientY + "px"; 

   var img =  document.createElement('img')
   img.setAttribute("src", "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
   div.appendChild(img);


   document.body.appendChild(div)

   gsap.to(img, {
    y:0,
    ease: Power1,
    duration: .6,
   });

   gsap.to(img, {
    y:"100%",
    ease: Power2,
    delay: .6,
    duration: .6,
   });

   setTimeout(function(){
    div.remove()
   },2000)
  }, 500));