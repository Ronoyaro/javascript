// Crie uma função que verifique
// corretamente o tipo de dado
function verifyType(dado) {
  
  return Object.prototype.toString.call(dado)

}

let carro = { //utilizei o let pra mutar a variável
  rodas: 4,
}

carro = '' //String
carro = [] //Array

console.log(verifyType(carro))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const square = {
  lados: 4,
}

Object.defineProperties(square, {
  lados: {
    configurable: false,
    writable: false,
  }
})

square.lados = 5 

console.log(square) //square continua com 4 lados

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

configuracao.width = 200

console.log(configuracao) //Configuração ainda possui width de 800


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))


