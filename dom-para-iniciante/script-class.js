//Pilares da classe
//Abstração, polimorfismo, encapsulamento, herança


// Classe Pessoa: Crie uma classe chamada Pessoa com propriedades como nome, idade e métodos para definir e obter esses valores.
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  set setPerson(nome) {
    this.nome = nome;
  }
  get getPerson() {
    return `Eu me chamo ${this.nome} e possuo ${this.idade} anos`
  }

}
const eu = new Pessoa('Ronald', 25); //instanciando

eu.setPerson = 'Gabriel' //setando
console.log(eu.getPerson) //pegando


// Classe Círculo: Crie uma classe chamada Circulo que aceita o raio como parâmetro no construtor e tem métodos para calcular a área e o perímetro do círculo.

class Circle {
  constructor(raio) {
    this.raio = raio;
  }

  getArea() {
    const calc = Math.PI * Math.pow(this.raio, 2)
    return calc.toFixed(2);
  }
  getPerimeter() {
    const calc = 2 * Math.PI * this.raio;
    return calc.toFixed(2);
  }
}

const circulo = new Circle(5)

console.log(circulo.getArea()); // 78,54

console.log(circulo.getPerimeter()) //31.42

//Classe Conta Bancária: Crie uma classe chamada ContaBancaria que inclua propriedades como saldo e métodos para depositar e sacar dinheiro.

class BankAccount {
  constructor(balance) {
    this.balance = balance
  }
  withDraw(money) {
    const myMoney = this.balance - money;
    return myMoney.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  }
  get myBalance() {
    return this.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

}

const conta = new BankAccount(2000) //Instancio o objeto

console.log(conta) //retorna o objeto
console.log(conta.myBalance) //retorna R$ 2.000,00
console.log(conta.withDraw(50)) //retorna 1.500,00 


// Classe Livro: Crie uma classe chamada Livro com propriedades como título, autor e ano de publicação.

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

const livro = new Book('As Crônicas de Gelo e Fogo', 'George R.R Martin', 2013);

console.log(livro);


// 1. cria uma classe CarrinhoDeCompras que possa armazenar os produtos 
// que um cliente está selecionando, essa classe deve ter:
// - lista de produtos
// - valor total da compra
// essa classe deve permitir que o cliente possa,
// - adicionar um produto
// - remover um produto
// - visualizar os produtos da lista

// 2. crie uma outra classe Produto, que seja a definição de um produto
// selecionado pelo cliente:
// - nome do produto
// - quantidade
// - valor do produto

// ao criar um novo produto, você ja deve definir todas as informações do
// mesmo, você também deve ter um meio de informar ao cliente qual o produto
// que ele escolheu


class CarrinhoDeCompras {
  #produtos
  constructor() {  
    this.#produtos = []
  }
  
  adicionar(item) {
    this.#produtos.push(item)
  }
  remover(item) {
    this.#produtos = this.#produtos.filter(produto => produto !== item)

  }
  get getProdutos() {
    return this.#produtos
  }
}

const carrinho = new CarrinhoDeCompras()

carrinho.adicionar('leite')
carrinho.adicionar('feijao')
carrinho.adicionar('arroz')

carrinho.remover('leite')




class ShopCart {
  constructor() {
   this.products = [] 
  }
  addItem(item) {
    this.products.push(item)
  }
  removeItem(item) {
   this.products = this.products.filter(obj => obj.product !== item)
  }
  sumCart() {
     return this.products.reduce((total, item) => {
       return total += item.price
    },0)
  }
  getProducts(){
    return this.products
  }
}

class Product {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

const cart = new ShopCart()

cart.addItem(new Product('RTX4090TI', 1, 699))

console.log(cart.sumCart());

console.log(cart.getProducts())


















