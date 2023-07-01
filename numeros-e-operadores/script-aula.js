
var a = 10;
var b = 5;
var soma = a + b;
console.log(soma); //retorna 15

var c = 10;
var d = 5;
var sub = c - d;
console.log(sub); //retorna 5

var a = 10 + 20 + 5 + 30;
console.log(a); //retorna 65

var a = 20 - (10 + 5) / 2;
console.log(a); // calculo entre parênteses, retorna 12.5

var a = 20 + (10*5) / 2;
console.log(a); //Calculo com divisão e multiplicação entre parênteses, retorna 45

var a = 10**2;
console.log(a); //Exponenciação retorna 100

var a = 10%2;
console.log(a); //retorna 0, não sobra valores

//Operadores Unários

//incremento

var x = 5;
console.log(x++); //retorna 5
console.log(x); //retorna 6 

var x = 5;
console.log(++x); //retorna 6
console.log(x); //retorna 6

//decremento

var y = 5;
console.log(y--); // retorna 5
console.log(y); // retorna 5

var y = 5;
console.log(--y); // retorna 4
console.log(y); //retorna 4

// O + ou - na frente da variável pode transformar uma string em um número

var idade = 25; //Nesse caso var já era um número então a soma ocorreu normalmente
console.log(idade + 5); // retorna 30

var idade = '25';
console.log(idade + 5); //Concatena pois 25 é uma string, e 5 é um número. 255 

var idade = '25';
console.log(+idade + 5); //retorna 30. Pois foi atribuido o sinal de + no inicio

var idade = 'Tenho 25'
console.log(+idade + 5); // retorna NaN.



