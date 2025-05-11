var tagsEl = document.getElementById('tags')
var textarea = document.getElementById('textarea')


textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        },10)

        randomSelect()
    }
})

//Creating Tags
function createTags(input) {
    var tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // console.log(tags)

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        var tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}


function randomSelect() {
    // console.log('Hello World')
    var times = 30

    // shifting to each one, highlighting and Unhighlighting
    var interval = setInterval(() =>{
        var randomTag = pickRandomTag()

        highlightTag(randomTag)
    //This is taking care of stoping it to a random element and highlight
        setTimeout(() => {
            unHighlightTag(randomTag)
        },100)
    },100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
           var randomTag = pickRandomTag()

           highlightTag(randomTag)
        },100)
    }, times * 100)
}

//To select Random number
function pickRandomTag(){
    var tags = document.querySelectorAll('.tag');
    if(tags.length === 0){
        return null;
    }else{
        return tags[Math.floor(Math.random() * tags.length)]
    }
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}