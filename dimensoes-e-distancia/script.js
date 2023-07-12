// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const rectImg = img.getBoundingClientRect();

// console.log(rectImg.top);

// Retorne a soma da largura de todas as imagens



function somaImg() {
    const imgAll = document.querySelectorAll('img');
    let soma = 0;
    imgAll.forEach((img) => {
        soma += img.offsetWidth
    });
    console.log(soma);
}

window.onload = function() {
    somaImg()
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('li a')

links.forEach((link) => {
    let width = link.scrollWidth;
    let height = link.scrollHeight;
    if (width && height > 48) {
        console.log(link, 'Está no padrão')
    } else {
        console.log(link, 'Não está padronizado')
    }
})



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserQuery = window.matchMedia('(max-width: 720px)');
if (browserQuery.matches) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
} else {
   menu.classList.remove('menu');
}  

