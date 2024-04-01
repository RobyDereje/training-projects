// let ul = document.querySelector('ul');
// let li = document.createElement('li');
// ul.append(li)
// li.innerText = 'X-men';
// li.classList.add('list-items')
// // li.classList.remove('list-items')

// console.log(li.classList.contains('list-items'))
// li.remove()
// console.log(ul.parentNode.parentNode)

// let html = document.documentElement
// console.log(html.parentNode)
// console.log(html.parentElement)

// console.log(ul.children)
// ul.firstElementChild.style.backgroundColor = 'red'
// ul.children[1].style.backgroundColor = 'rgb(200, 140, 140)'
// ul.children[3].style.backgroundColor = 'rgb(140, 140, 200)'
// ul.lastElementChild.style.backgroundColor = 'blue'
// console.log(ul.previousElementSibling.nextElementSibling)
// console.log(ul.nextElementSibling)

let but2 = document.querySelector('.button-2')
function alertbut2(){
    return alert("Dun touch me bruv")
}
but2.addEventListener('click', alertbut2)

let but3 = document.querySelector('.button-3')
function but3Hover(){
    but3.style.backgroundColor = 'transparent'
    but3.style.color = 'whitesmoke'
}
but3.addEventListener('mouseover', but3Hover)

let reveal = document.querySelector('.reveal')
let masked = document.querySelector('.masked')
let btn4 = document.querySelector('.btn4')

function hover(){
    btn4.style.backgroundColor = 'lightblue';
}
function stopHover(){
    btn4.style.backgroundColor = '#f0f0f0'
}

function hover2(){
    btn4.style.backgroundColor = 'lightcoral';
}
function stopHover2(){
    btn4.style.backgroundColor = '#f0f0f0'
}
btn4.addEventListener('mouseover', hover)
btn4.addEventListener('mouseout', stopHover)
function revealMasked(){
    if(masked.classList.contains('reveal')){
        btn4.removeEventListener('mouseover', hover2)
        btn4.removeEventListener('mouseout', stopHover2)
        btn4.addEventListener('mouseover', hover)
        btn4.addEventListener('mouseout', stopHover)
        masked.classList.remove('reveal')
    } else {
        btn4.removeEventListener('mouseover', hover)
        btn4.removeEventListener('mouseout', stopHover)
        btn4.addEventListener('mouseover', hover2)
        btn4.addEventListener('mouseout', stopHover2)
        masked.classList.add('reveal')
    }
    
}

btn4.addEventListener('click', revealMasked)

// window.addEventListener('click', function(){console.log('Window')}, false)
// document.addEventListener('click', function(){console.log('Document')}, false)
// document.querySelector('.divouter').addEventListener('click', function(){
//     console.log('Outer Div')}, {once: true})
// document.querySelector('.divinner').addEventListener('click', function(){console.log('Inner Div')}, false)
// document.querySelector('.button').addEventListener('click', function(e){
//     e.preventDefault()
//     e.target.innerText = 'clicked!'
//     console.log(e.target.innerText)}, false)

document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked.')

   let target = e.target
    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    }
})

let sports = document.querySelector('#sports')
let newSports = document.createElement('li')

newSports.innerText = 'Rugby'
sports.appendChild(newSports)
newSports.setAttribute('id', 'rugby')

