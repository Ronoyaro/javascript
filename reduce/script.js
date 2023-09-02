
const pessoa = {
  nome: 'Ronald',
  idade: 25,
  sexo: 'Masculino'
}



const names = ['Ronald', 'Ricardo', 'Henry', 'Elizete', 'Agnaldo', 'Nathila'];


const nameCount = names.reduce((acc, nomeAtual) => {
  const firstLetter = nomeAtual[0].toLocaleLowerCase();
  if (acc[firstLetter]) {
    acc[firstLetter]++
  } else {
    acc[firstLetter] = 1
  }
  return acc;
}, {})

console.log(nameCount)

// criou um objeto {}
// const firstLetter criado e posto lowercase
//

//Some

const numeros = [0, 20, 99, 101, 55]

const temMaior = numeros.some((numero) => {
  return numero > 100;
})

console.log(temMaior);

const numeros2 = [0, 20, 25, 55, 103]

function maiorQue100(numero) {
  return numero > 100
}

const temMaior2 = numeros.some(maiorQue100)

console.log(temMaior2)

//Every

const arrayNum = [10, 9, 30, 55, 60]

function saoMaiores(num) {
  return num > 11
}

const queroSaberSeEhMaior = arrayNum.every(saoMaiores); //retorna falso pq 11 não é maior que 10, every percorre a Array e retorna o primeiro falso que achar


//FIND //retorna o primeiro valor truthy que achar da array.

const arrayFruit = [undefined, null, 'Goiaba', 'Laranja'];

const buscaFruta = arrayFruit.find(item => {
  return item
})

console.log(buscaFruta); //retorna Goiaba

const arrayNumber = [10, 25, 30, 50]

const buscaNumber = arrayNumber.find((item) => {
  return item > 40;
})

console.log(buscaNumber); //retorna 50


const buscaFrutaIndex = arrayFruit.findIndex((item) => {
  return item;
})

console.log(buscaFrutaIndex); //retorna index 2, que é onde está o Goiaba




const hello = 'hello'

const helloNew = hello.replace('e', 1).replace('o', 4);



// function changeLetter() {
//     if()
// } 

console.log(hello.includes('e'));

function trocaNome(nome) {

  if (nome.includes('e')) {
    return nome.replace('e', 1).replace('o', 4)
  }
 
}

console.log(trocaNome(hello))


const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 25
  },
  {
    nome: 'HTML 3',
    min: 50
  },
  {
    nome: 'HTML 4',
    min: 55
  },

]

const maior15 = aulas.filter((aula) => {
    return aula.min > 23
})

console.log(maior15)