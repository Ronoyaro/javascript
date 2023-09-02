function Dom(seletor) {
  this.element = document.querySelector(seletor)
  
}

Dom.prototype.ativo() = function(classe) {
  this.element.classList.add(classe)
}

const ul = new Dom('ul')




