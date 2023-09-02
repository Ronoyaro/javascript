
const ctt = document.querySelector('.contato')
const h1 = document.querySelector('h1').cloneNode(true)

ctt.appendChild(h1) //H1 clonado


// Duplique o menu e adicione ele em copy
const menu = document.querySelector('nav').cloneNode(true)
ctt.appendChild(menu)

// Selecione o primeiro DT da dl de Faq

const dt = document.querySelector('.faq dt')
console.log(dt)

// Selecione o DD referente ao primeiro DT
console.log(dt.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais

let myAnimal = document.querySelector('.animais')

let myFaq = document.querySelector('.faq')

myFaq.innerHTML = myAnimal.innerHTML














