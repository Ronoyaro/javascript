const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista');

h1.innerText //retorna o texto dentro
h1.innerHTML //retorna o HTML de dentro
h1.outerHTML //retorna todo o HTML de fora

console.log(animaisLista.innerHTML); //retorna o HTML de dentro
console.log(animaisLista.outerHTML); //retorna todo o HTML

//Posso atribuir um novo texto para dentro do meu H1
h1.innerText = 'Olá, Mundo!'

console.log(h1.parentElement); //retorna o section que é o pai
console.log(h1.parentElement.parentElement) //retorna o pai do pai que agora é o body, e assim por diante.

console.log(animaisLista.nextElementSibling); //retorna o prox elemento no caso animais-descrição
console.log(animaisLista.previousElementSibling); //retorna o anterior

console.log(animaisLista.children); //retorna os filhos

console.log(animaisLista.children[--animaisLista.children.length]) //retorna o ultima da lista


console.log(animaisLista.childNodes); //retorna uma lista node
console.log(animaisLista.nextSibling);