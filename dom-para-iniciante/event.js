

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInterno = document.querySelectorAll('a[href^="#"]');

function addClass(event) {
  event.preventDefault();
  //o loop roda primeiro pra remover a class ativo do link em especifico, não se refere ao que foi clicado
  linkInterno.forEach(link => link.classList.remove('ativo'))
  //aqui você adiciona a classe utilizando o this pq foi exatamente onde você clicou
  this.classList.add('ativo')
}

linkInterno.forEach(item => item.addEventListener('click', addClass));

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

function bodyEl(event) {
  console.log(event.target)
}

const allBody = document.body.addEventListener('click', bodyEl)

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// function bodyElremove(event) {
//   event.target.remove()
// }

// const allbodyRemove = document.body.addEventListener('click', bodyElremove)

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function upSize(event) {
 const elementText = document.documentElement
  switch(event.key) {
  case 't':
    elementText.classList.toggle('text-up');
    break;
 }

}

window.addEventListener('keydown', upSize)


