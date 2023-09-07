// Retorne um número aleatório
// entre 1050 e 2000

const aleatory = Number.parseInt(Math.random() * (2000 - 1050 + 1) + 1050);

console.log(aleatory)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const numArray = (numeros.split(','))

const numberArray = numArray.map((item) => {
  return +item
})

const reduceResult = numberArray.reduce((first, second) => {
  return first < second ? second : first;
})

console.log(reduceResult)


console.log(Math.max(...numArray))


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$  200'];

// let total = 0
// listaPrecos.forEach(item => {
//   const stringClean = item.toLowerCase().replace('r$ ', '').trim().replace(',', '.')
//   const nowNumber = +stringClean
//   total += Math.round(nowNumber)

// })
// console.log(total)

function limpaPreco(value) {
  value = +value.toUpperCase().replace(',', '.').replace('R$ ', '').trim()
  return +value.toFixed(2)

}
//O argumento passado é cada valor da minha array, o que essa função faz é pegar esse valor
//E modificá-lo o transformando num número utilizável, limpaPreco é funcao que me retorna uma string transformada em número, tirando caracteres como R$ e espaços.
let total = 0
listaPrecos.forEach(value => {
  total += limpaPreco(value) 
})

console.log(total)


const arrayNum = [20, 10, 5, 1, 9, 2, 3, 8]

arrayNum.sort((a, b) => {
  console.log(a, b)
})

// console.log(arrayNum)

const carros = ['Ford', 'Parati', 'Honda'];

carros.forEach((item, index, array) => {
  array[index] = array[index].toUpperCase() //Map é melhor a ser utilizado, usando o return
})

