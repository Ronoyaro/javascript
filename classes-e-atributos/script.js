// Adicione a classe ativo a todos os itens do menu

const menuAtivo = document.querySelectorAll('.menu a');
const menu = document.querySelector('.menu');



menuAtivo.forEach((addClass) => {
    addClass.classList.add('ativo')
})

console.log(menuAtivo);






// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menuAtivo.forEach((item,index) => {
    if (index !== 0) {
        item.classList.remove('ativo');
    }
});

console.log(menuAtivo)

// Verifique se as imagens possuem o atributo alt

const alt = document.querySelectorAll('img');

alt.forEach((item) => {
    const possuiAtributo = item.hasAttribute('alt');
    console.log(item, possuiAtributo);
});

// Modifique o href do link externo no menu

const meuHref = menuAtivo[3];
meuHref.setAttribute('href', 'https://www.google.com')



