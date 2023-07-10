



// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const apenasImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(apenasImagens);

// Selecione todos os links internos (onde o href começa com #)
const apenasLinks = document.querySelectorAll('[href^="#"]');
console.log(apenasLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');
console.log(h2);

// Selecione o último p do site

const ultimoP = document.querySelector('.copy p');
console.log(ultimoP);

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);
