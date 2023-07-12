const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');


//APPENDCHILD()
//move algo para ultimo de dentro dele. 

// contato.appendChild(menu) //movi meu menu para o final do meu contato

//INSERTBEFORE()
//move algo para antes do outro dentro dele
// contato.insertBefore(menu, titulo) // movi meu menu, para dentro do contato, antes do meu titulo

//REMOVECHILD()
//remove o elemento

// contato.removeChild(titulo) //removi meu titulo

//REPLACECHILD()
//removo um elemento para por o outro. 
//contato.replaceChild(menu, titulo)



//CRIAR NOVO ELEMENTO COM CREATEELEMENT();

// const newH1 = document.createElement('h1');
// newH1.innerHTML = 'Olá Mundo'
// newH1.classList.add('titulo')

// contato.appendChild(newH1);



//PARA CLONAR O ELEMENTO
const meuH1 = document.querySelector('h1');
const clonemeuH1 = meuH1.cloneNode('false'); //serve para clonar os filhos também

const titulo2 = document.querySelector('.titulo');
console.log(titulo2);

titulo2.appendChild(clonemeuH1);

contato.insertBefore(clonemeuH1, titulo);




// Duplique o menu e adicione ele em copy
const copy = document.querySelector('.copy');
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true); //copia dos filhos

copy.appendChild(cloneMenu);



// Selecione o primeiro DT da dl de Faq

const dtFaq = document.querySelector('.faq dt');
console.log(dtFaq)


//Dessa maneira também pode ser acessado
// const dtFaq = document.querySelector('.faq')
// console.log(dtFaq.children[1].children[0])


// Selecione o DD referente ao primeiro DT

const ddFaq = document.querySelector('.faq dd');
console.log(ddFaq);


// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML;