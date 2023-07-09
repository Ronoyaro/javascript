
// const animais = document.getElementById('animais');
// console.log(animais)


const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNodeList = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section'); //Agora meu titulo foi afetado pela estilização do grid-section e eu posso visualizar através do HTMLcollection, que atualizou ao-vivo

console.log(gridSectionHTML); //Me traz uma lista HTMLCollection com as minhas classes grid-section (porem a className atualiza ao vivo caso seja adicionada novos itens a classe grid-section)
console.log(gridSectionNodeList); //Me traz uma lista NodeList com as minhas classes grid-section (não atualiza)


//Para cada item da minha GridSectionNodeList agora irá possuir a classe Azul 
//gridSectionNodeList é uma array-like então possui forEach

gridSectionNodeList.forEach(function(gridItem, index){
    gridItem.classList.add('azul')
    console.log(gridItem, index)
});

const gridSectionHTMLagoraEhArray = Array.from(gridSectionHTML);





// const primeiraUl = document.querySelector('ul');
// const primeiraLi = document.querySelector('li');

// console.log(primeiraUl) //retorna toda lista do meu nav
// console.log(primeiraLi) //retorna a li animais

// //sintaxe '[href^="#"]' tudo que começar ^ com #
// const linkInterno = document.querySelector('[href^="#"]');

// //retorna o primeiro link com a # na frente
// console.log(linkInterno)

// const animaisImg = document.querySelectorAll('.animais img');

// console.log(animaisImg)


