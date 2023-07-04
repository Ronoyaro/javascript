

// Crie uma função para verificar se um valor é Truthy

function funcao(truthy) {
    return !!truthy
}

console.log(funcao(30));


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function isSquare(lado) {
    return lado * 4;
}


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function meuNome(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(meuNome('Ronald', 'Ferreira'));


// Crie uma função que verifica se um número é par

function isEven(num) {
    var conta = num % 2; //Calculo o resto do meu número por 2 que vai sempre dar 0
    if (conta === 0) {  //Se esse meu resto for identico a 0 então me retorne verdadeiro ou falso
        return true;
    } else {
        return false;
    }
}
console.log(isEven(10)); //Nesse caso 10 é divisivel por 2 que não possui resto, significa que ele é par.

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function retorno(dado) {
    return typeof dado;
}

console.log(retorno('Ronald'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
   console.log('Rolou')

})



 //Corrija o erro abaixo

 /*function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);*/ 

function precisoIr(paisesVisitados) {
    var totalPaises = 193;
    function jaFui(paisesVisitados) {
        return `Já conheci ${paisesVisitados} países e ainda me faltam ${totalPaises - paisesVisitados} para conhecer.`
    }
    return jaFui(paisesVisitados);
}

console.log(precisoIr(40));


  