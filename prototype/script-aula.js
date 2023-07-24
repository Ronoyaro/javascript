function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

const alguem = new Pessoa('Ronald', 25);
const sami = new Pessoa('Samira', 20);
console.log(Pessoa.prototype); //A função pessoa ela possui a propriedade chamada prototype que retorna o seu tipo objeto construtor.

//adicionar novas propriedades a minha função

Pessoa.prototype.andar = function() { //criou uma função chamada andar()
    return this.nome + ' andou';
}
console.log(alguem.andar()); //retorna Ronald andou

Pessoa.prototype.anoQueNasceu = function() {
   const year = new Date();
   const anoAtual = year.getFullYear();
   return anoAtual - this.idade; 
    
}
console.log(alguem.anoQueNasceu());  //retorna 1998 o ano em que nasci.

console.log(sami.anoQueNasceu()); //retorna 2004, o ano em que ela nasceu.


const lista = document.querySelectorAll('li');


const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista)

console.log(listaArray2.filter);



