// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img').offsetTop

console.log(img)


// Retorne a soma da largura de todas as imagens
function sumImg(){
  const allImg = document.querySelectorAll('img');
  const newImg = Array.from(allImg);
  const returnSum = newImg.reduce((total, img) => total += img.offsetWidth,0)
  console.log(returnSum)
}

window.onload = function(){
  sumImg();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')

links.forEach(link => {
  if (link.offsetHeight >= 48 && link.offsetWidth >= 48) {
    console.log('Está de acordo')
  } else {
    console.log('Não possui boa acessibilidade')
  }
}) 

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
function browser() {
  const menu = document.querySelector('nav')
  const browser = window.matchMedia('(max-width: 720px)').matches
  if (browser) {
    menu.classList.add('menu-mobile')
  }
}

browser();