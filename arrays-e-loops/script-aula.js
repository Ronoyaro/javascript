var videoGames = ['Ps4', 'Switch', 'Xbox'];


videoGames[0] //consulta o item ps4

var ultimoItem = videoGames.pop(2); //remove o Xbox e aparece no console

videoGames.push('3Ds') //acrecenta o 3Ds na minha array

//Loops


/*var i = 0;
while (i <= ) {
    console.log(i);    
    i++;
}


for(i = 0; i <= 10; i++) {
    console.log(i)
}*/


var filmes = ['Whiplash', 'Alien', 'Batman', 'Resident Evil'];
for (i = 0; i < filmes.length; i++) { //i recebe = 0 signifca que i agora é o filme Whiplash
//Meu console fica em cima pq a condição deve ocorrer depois   
    console.log(filmes[i]) //i agora é a nossa lista nomeada 
    if(filmes[i] === 'Alien') {
        break;
    }
} 


var frutas = ['Banana', 'Maça', 'Pera', 'Abacaxi'];

removeAbacaxi = frutas.pop(); 

frutas.forEach(function(fruta, index) {
    console.log(fruta, index);
})