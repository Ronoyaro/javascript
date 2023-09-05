// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let total = 0
let recebTotal = 0


transacoes.forEach(item => {
  const price = +item.valor.replace('R$ ', '')
  if(item.descricao.slice(0,4) === 'Taxa') {
    total += price
  } else {
    recebTotal+= price
  }
})

console.log(total, recebTotal)



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';')

console.log(arrayTransportes)


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const arrayHtml = html.split('span').join('a')
console.log(arrayHtml)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase[--frase.length])

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxa = 0

transacoes2.forEach(item => {
  const myTax = item.toLowerCase().trim().slice(0,4)
  if(myTax === 'taxa') {
    totalTaxa++
  }
})

console.log(totalTaxa)


