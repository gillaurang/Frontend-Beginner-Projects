var rect = document.querySelector('.center')

rect.addEventListener('mousemove', function(get){
    var rectLocation = rect.getBoundingClientRect();
    // console.log(rectLocation) To test the location of mouse
    // console.log(get) to check the mouse value in x-axis

    var insideRect = get.clientX - rectLocation.left;

    if(insideRect < rectLocation.width/2){
        var redColor = gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideRect)

        gsap.to(rect, {
            backgroundColor: `rgba(${redColor}, 0, 0)`,
            ease: Power4,
            
        })
    }else{
        var blueColor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideRect)
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        })
    }
})

rect.addEventListener('mouseleave', function(){
    gsap.to(rect,{
        backgroundColor: 'white',
    })
})
