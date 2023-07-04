


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var ronald = 25;
var elizete = 47;
var henry = 6;
var gustavo = 24;

if (ronald > gustavo) {
    console.log('É maior');
} else if(ronald === gustavo) {
    console.log('É igual')
} else {
    console.log('É menor')
}

if (ronald > elizete) {
    console.log('É maior');
} else if(ronald === elizete) {
    console.log('É igual')
} else {
    console.log('É menor')
}


 // Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao); // retorna 3 (do final)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28;  //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

var comparacao = brasil > china;

if (comparacao) {
    console.log('Brasil é maior'); 
} else {
    console.log('Brasil é menor'); //retorna esse
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); //retorna falso
}



// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); //retorna Câo
} else {
  console.log('Falso');
}

