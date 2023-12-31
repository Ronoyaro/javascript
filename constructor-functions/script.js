// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//       console.log(this.nome + ' andou');
//     }
//   }
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  
  

  
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(`${this.nome} andou`);
    }
}
const eu = new Pessoa('Ronald', 25);

const joao = new Pessoa('Joao', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);


  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

function Dom(elemento) {
  const elementos = document.querySelectorAll(elemento);
  this.elements = elementos
  this.addClass = function(classe) {
    elementos.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function(classe) {
    elementos.forEach((element) => {
      element.classList.remove(classe)
    })

  }
}


const className = 'ativado';
const teste = new Dom('li');

teste.addClass(className);
teste.removeClass(className);














  

