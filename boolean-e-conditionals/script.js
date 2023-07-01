
var possuiGraduacao = true;

if (possuiGraduacao) {
    console.log('Sim, eu possuo'); //retorna esse, e não executa o else
}else {
    console.log('Não, possuo');
}



/*Se o if() não for verdadeiro ele executa o else if()*/

var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {   
    console.log('Sim, eu possuo');
 } else if (possuiDoutorado) {
    console.log('Possuo Doutorado'); //retorna esse, e não executa o else
 } else {
    console.log('Não, não possuo');
 }

var a = 10 < 15; //true

if(a) {
    var a = 30;
    console.log(a);
} else {
    var a = 25;
    console.log(a)
}

var a = 0 

if(a) {
    console.log('é verdadeiro');
}else {
    console.log('é falso')
}

 