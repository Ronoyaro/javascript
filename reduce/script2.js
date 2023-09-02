// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const selectSection = document.querySelectorAll('.curso');
console.log(selectSection);

const newArraySection = Array.from(selectSection);

const objetoCurso = newArraySection.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aula = curso.querySelector('.aulas').innerHTML;
  const hora = curso.querySelector('.horas').innerHTML;

  return {
    titulo,
    descricao,
    aula,
    hora,
  }
})
console.log(objetoCurso);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numMaior = numeros.filter((numero) => {
  return numero > 100;
})

console.log(numMaior);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const findInstrumento = instrumentos.some((instrumento) => {
  return instrumento === 'Baixo';
})

console.log(findInstrumento);

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

const arrayCompras = compras.reduce((acc, item) =>{
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.').trim()
  return acc + precoLimpo
  
},0)

console.log(arrayCompras)

// function compra() {
//     let soma = 0;
//     const totalCompras = compras.forEach(item => {
//     const newPrice = +item.preco.replace('R$ ', '').replace(',', '.');
//     soma += newPrice
//     console.log(soma)
//   })
// }

// compra()

