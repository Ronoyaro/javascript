function areaQuadrado(lado) { //defino minha função chamada de areaQuadrado que possui o parâmetro lado
    return lado * lado; //minha função retona a multiplicação entre os lados
}

console.log(areaQuadrado(2)) //quando eu passo no console o número 2, ele realiza a multiplicação que é a operação que está sendo realizada dentro da função

function funcao(truly) {
    if (truly) {
        console.log(`${truly} é verdadeiro`)
    } else {
        console.log(`${truly} é falso`)
    }
}

funcao(10)

//function imc(peso, altura) {
    //console.log(peso / (altura ** 2));

//}

//imc(60, 1.80);

addEventListener('click', function(){
    console.log('Ronald Ferreira');

})



function imc(peso, altura) { 
    const imc = peso / (altura * altura);
    console.log(imc);
}

console.log(imc(60, 1.80));

function terceiraIdade(idade) {
    if (idade >= 60) {
        return 'é verdadeiro';
    } else {
        return 'é falso';
    }
}

function dados() {   //Crio a função dados sem parâmetros
    var nome = 'Ronald';  //passo variáveis
    var idade = 25;
    function outrosDados() { //crio uma outra função chamada outrosDados() dentro de dados();
        var endereço = 'Salvador'; //passo outras variáveis
        var temEmprego = true;
    return `${nome}, ${idade}, ${endereço}, ${temEmprego}` //retorno o valor das variaveis em outrosDados();
    }
return  outrosDados(); //Dessa vez você está retornando a função, que retorna os valores que estão dentro do seu return.
}

console.log(dados()); //passo no console dados(); que vai me retornar nome, idade, endereço e se possuo emprego

console.log(outrosDados()); // vai retornar um erro pois outrosDados() só existe dentro do escopo de dados(); da mesma maneira que você não consegue acessar as variáveis dentro dela.

