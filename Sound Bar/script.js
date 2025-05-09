var sounds = ['applause', 'boo', 'gasp', 'victory', 'tada']

sounds.forEach(sound => {
    var btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {

        stopSong()

        document.getElementById(sound).play();
    })

    document.querySelector('.buttons').appendChild(btn)
})

function stopSong() {
    sounds.forEach(sound => {
        var song = document.getElementById(sound)


        song.pause()
        song.currentTime = 0;
    })
}