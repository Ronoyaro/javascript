
const menu = document.querySelector('.menu');

menu.classList.add('azul', 'amarelo'); //adiciona
menu.classList.remove('amarelo'); //remove
menu.classList.toggle('azul'); //adc se não tiver/remove se tiver
menu.classList.contains('menu'); //retorna um valor booleano true se tiver a classe ou false se não tiver.
//menu.classList.replace('menu', 'ativo'); //troca um pelo outro.

if (menu.classList.contains('menu')) {
    menu.classList.add('azul');
} else {
   menu.classList.remove('menu');
}

console.log(menu.classList);

const img = document.querySelector('img');

img.attributes[0];

img.getAttribute('alt'); //retorna o atributo src do img.

img.setAttribute('alt', 'É uma raposa'); //muda o texto do alt.
img.hasAttribute('alt'); //retorna um valor booleano true se tiver ou false se não possuir

console.log(img);






