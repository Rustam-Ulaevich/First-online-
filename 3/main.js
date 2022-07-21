
const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

// const onClickHandler = (event) => {
//     console.dir(event)
//     if(event.altKey)alert('clicked alt')
//     if(event.ctrlKey)alert('clicked ctrl')
// }

const onClickHandler = (event) => {
    event.stopPropagation()
    console.dir(event.currentTarget)
}

// sm.onclick = onClickHandler
// sm.onclick = onClickHandler2


sm.addEventListener('click', onClickHandler)
md.addEventListener('click', onClickHandler)
bg.addEventListener('click', onClickHandler)
