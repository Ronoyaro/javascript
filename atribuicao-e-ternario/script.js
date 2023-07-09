//A expressão funciona da seguinte maneira: numero = numero + numero2

/*let numero = 20;
let numero2 = 10;

console.log(numero += numero2);

var idade = 19;
var elePode = (idade >= 18) ? 'Ele pode beber' : 'Ele não pode beber';

console.log(elePode)

//condição ? true : false*/



/*if (idade >= 18) {
    console.log('Pode beber')
} else {
    console.log('Não pode beber')
};*/


/*var possuiCarro = false;
var possuiMoto = true;
if (possuiCarro) {
    console.log ('Ele tem caro')
} else if (possuiMoto) {
    console.log('Ele possui moto')
} else {
    console.log('Ele não possui')
}*/








let lowProfile = 2

let Gabriel = 9
let Ronald = 2

if (Gabriel < lowProfile) {

    console.log('Ele realmente é low Profile')
} else {
    let resultado = 'Tu não é low Profile porra nenhuma';
    console.log(resultado)
}



// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
var soma = 500;

console.log(scroll += soma);



// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;


var darCredito = (possuiCarro && possuiCasa) ? 'Pode dar crédito' : 'Não pode dar credito';

console.log(darCredito);
