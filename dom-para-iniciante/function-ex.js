// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)


const somaParagrafo = Array.prototype.reduce.call(paragrafos, (acc, item) => {
  item = item.innerText.length
  acc += item
  return acc
},0)

console.log(somaParagrafo)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function elementCreate(tag, classe, content) {
  const element = document.createElement(tag)
  element.classList.add(classe)
  element.innerText = content
  
  return element
}

console.log(elementCreate('h1', 'azul', 'Insira seu texto aqui'))
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const ElementCreate2 = elementCreate.bind(null, 'h1', 'titulo')

console.log(ElementCreate2('Nosso novo texto'))