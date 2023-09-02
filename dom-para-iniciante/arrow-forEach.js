// Mostre no console cada parágrado do site
const allP = document.querySelectorAll('p')

allP.forEach(item => console.log(item))

// Mostre o texto dos parágrafos no console

allP.forEach(item => console.log(item.innerText))

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));


// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('nav li')

menu.forEach(item => item.classList.add('ativo'))

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach(item => {
  if(item.innerText !== 'ANIMAIS') {
    item.classList.remove('ativo')
  }
})

// Verifique se as imagens possuem o atributo alt
const altAttribute = document.querySelectorAll('img')

altAttribute.forEach(item => console.log(item.hasAttribute('alt')));

// Modifique o href do link externo no menu

const menuHref = document.querySelector('[href^="https://git"]')

menuHref.setAttribute('href','https://www.google.com')



