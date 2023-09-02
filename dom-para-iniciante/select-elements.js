const grid = document.querySelectorAll('.grid-section');


function teste() {
  console.log(this)
  this.classList.add('displayNone')
}


grid.forEach((item, index) => {
  item.addEventListener('click', teste)
})



// Retorne no console todas as imagens do site
  const img = document.querySelectorAll('img');
  console.log(img)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('[src^="img/imagem"]')
console.log(imagem)

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]')
console.log(linkInterno)

// Selecione o primeiro h2 dentro de .animais-descricao
console.log(document.querySelector('.animais-descricao h2'))
// Selecione o último p do site
const lastP = document.querySelectorAll('p')

console.log(lastP[--lastP.length]);



