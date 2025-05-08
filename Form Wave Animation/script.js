var label = document.querySelectorAll('.form-control label')

label.forEach(labelss =>{
    labelss.innerHTML = labelss.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})
