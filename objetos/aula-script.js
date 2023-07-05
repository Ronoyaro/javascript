

var pessoa = {
    nome: 'Ronald',
    cor: 'Preto',
    idade: 25,
    possuiProfissao: true,
}

console.log(pessoa.nome); //verifico atavrés do console qual o valor da minha propiedade nome que está dentro do objeto pessoa


var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado; //o this serve para acessar o escopo da minha outra propriedade
    },
}

console.log(quadrado.lados); //retorna 4 

console.log(quadrado.area(10)); //retorna 100

console.log(quadrado.perimetro(5)); //retorna 20 


var alguem = {
    nome: 'Felipe',
    idade: 25,
    cor: 'preto',
    missao: function(){
        console.log(this)
        return this.nome
       
    },
}

console.log(alguem.missao()); 

console.table(alguem);



//console.log(typeof carro); //retorna que é um objeto, mesmo que nao possua nenhuma propriedade dentro dele

var carro = {
    rodas: 4,
    volante: 1,
    ligado() {
        return 'ligou'
    }
}

carro.volante = 3; //Mudei a minha variável que antes era 1 e agora é 3
carro.tipoDeMaterial = 'Ferro'; //Criei uma nova variavel para o meu carro 

var caixa = {
    largura: 300,
    altura: 200,
    cor: 'black',
    divisao() {
        return this.largura / 2 //largura está dentro do escopo da caixa
    }
}



