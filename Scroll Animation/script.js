const boxes = document.querySelectorAll('.box')

checkBox()

window.addEventListener('scroll', checkBox);


function checkBox(){
    // console.log(window.innerHeight)
    const trigger = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top 

        if(boxTop < trigger){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
