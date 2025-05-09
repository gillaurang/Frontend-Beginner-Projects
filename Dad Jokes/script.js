var jokeEl = document.getElementById('joke')
var jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

async function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    // Async await code
    var res = await fetch('https://icanhazdadjoke.com/', config)

    var data = await res.json()
    jokeEl.innerHTML = data.joke


    //Promises
    // .then(res => res.json())
    // .then(data => {
    //     jokeEl.innerHTML = data.joke
    // })
}