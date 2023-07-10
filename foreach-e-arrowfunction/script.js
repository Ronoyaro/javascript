

// Mostre no console cada parágrado do site
const cadaP = document.querySelectorAll('p');
console.log(cadaP);

cadaP.forEach((item) => {
    console.log(item)
});

// Mostre o texto dos parágrafos no console

cadaP.forEach((cadaP) => {
    console.log(cadaP.innerText)
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach((image) => console.log(i++));

imgs.forEach(() => console.log(i++));

