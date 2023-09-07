
// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const curso = document.querySelectorAll('.curso')

const newCurso = Array.from(curso)

// const returnDocument = newCurso.reduce((acc, item, index) => {
//   const newItens = Array.from(item.children).reduce((acu, it, ind) => {
//     acu[ind] = it.innerHTML
//     return acu
//   }, {})  
//   acc[index] = newItens  
//   return acc
// },{})

const objCurso = newCurso.map((curso) => {
  
  const titulo = curso.querySelector('h1').innerText
  const descricao = curso.querySelector('p').innerText
  const aulas = curso.querySelector('.aulas').innerText
  const horas = curso.querySelector('.horas').innerText
 
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
})

console.log(objCurso)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const newNumeros = numeros.filter((n) => n > 100)

console.log(newNumeros)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some(item => item === 'Baixo');
console.log(temBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acc, item) => {
  item = +item.preco.replace('R$ ', '').replace(',', '.') 
  acc+= item
  return acc
},0);

console.log(totalCompras)