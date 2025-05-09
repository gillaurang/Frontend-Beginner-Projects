var sounds = ['applause', 'boo', 'gasp', 'victory', 'tada']

sounds.forEach(sound => {
    var btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play();
    })

    document.querySelector('.buttons').appendChild(btn)
})