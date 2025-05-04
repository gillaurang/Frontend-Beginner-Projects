var left = document.querySelector('.left')
var right = document.querySelector('.right')
var container = document.querySelector('.container')


// left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseenter', function(){
    container.classList.add('hover-left')
})
// left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
left.addEventListener('mouseleave', function(){
    container.classList.remove('hover-left')
})

// right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseenter', function(){
    container.classList.add('hover-right')
})

// right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

right.addEventListener('mouseleave', function(){
    container.classList.remove('hover-right')
})
