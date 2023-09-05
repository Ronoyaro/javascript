class Dom1 {
  constructor(element) {
    this.elemento = element
  }
  selectElement() {
    return document.querySelector(this.elemento)
  }
  activeElement() {
    this.selectElement().classList.add('teste')
  }
}

const teste1 = new Dom1('li')
console.log(teste1)



function Dom2(seletor) {
  this.element = () => {
    return document.querySelector(seletor)
  }
  this.activeElement = () => {
    this.element().classList.add('teste')
  }
}

const teste2 = new Dom2('li')

console.log(teste2)



//Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

class ManipulaDom {
  constructor(elemento) {
    this.element = elemento
  }
  elementNodeList() {
    return document.querySelectorAll(this.element) //retornou a NodeList
  }
  addClass(classe) {
    this.elementNodeList().forEach(element => element.classList.add(classe)) //Adicionou as classes
  }
  removeClass(classe) {
    this.elementNodeList().forEach(element => element.classList.remove(classe))
  } //Removeu as Classes
} 

const meuLi = new ManipulaDom('li')

meuLi.removeClass('teste')







