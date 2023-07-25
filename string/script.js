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

function newAccount() {
    let soma =  0;
    let recebimentoTotal = 0;
    transacoes.forEach((item) => {
        const valor = +item.valor.replace('R$ ', ''); //transformou em numero
        if (item.descricao.slice(0,4) === 'Taxa') {
            soma = soma + valor;
        } else {
            recebimentoTotal += valor; 
        }

    })
console.log(soma);
console.log(recebimentoTotal);
}
newAccount();


  // Retorne uma array com a lista abaixo
let transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

transportes = transportes.split(';') //ele quebra sempre no ;

  
  // Substitua todos os span's por a's
  let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

const newArray = html.split('span').join('a');
console.log(newArray);

 
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';

  const lastChar = frase.charAt(frase.length-1); 
  
  // Retorne o total de taxas
 const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxaTotal = 0;
 transacoes2.forEach((item) => {
    const trans = item.trim().toLowerCase();
    if (trans.slice(0,4) === 'taxa') {
        taxaTotal++
    };  
});
console.log(taxaTotal); //return 3;
  
  
  