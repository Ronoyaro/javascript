// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total); //retorna 35

// Crie duas expressões que retornem NaN
var texto = 'Tenho 10'
console.log(+texto + 5); //retorna NaN
var texto2 = +'5 Reais'
console.log(texto2 + 5); //retorna NaN

// Somar a string '200' com o número 50 e retornar 250

var dinheiro = '200';
console.log(+dinheiro + 50); //retorna 250

// Incremente o número 5 e retorne o seu valor incrementado
var number = 5;
console.log(++number); //retorna 6


// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var numero = '80';
var unidade = 'kg';
var peso = +numero / 2;
console.log(peso + unidade); //retorna 40kg
