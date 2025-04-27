var main = document.querySelector('.main')
var crsr = document.querySelector('.crsr')

document.body.addEventListener('mouseleave', () => {
    crsr.style.opacity = '0';
});

main.addEventListener("mouseenter", () => {
    crsr.style.opacity = '1';
});

main.addEventListener("mousemove", function(gets){
    crsr.style.left = gets.x + 'px'
    crsr.style.top = gets.y + 'px'
})