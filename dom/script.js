// Retorne o url da página atual utilizando o objeto window

const page = window.location.href

console.log(page);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const titulo = document.querySelectorAll('.azul')

const h2 = titulo[1].classList.value;

 

// Retorne a linguagem do navegador
const lang = window.navigator.languages[0]
console.log(lang)

if (lang === 'en') {
    console.log('Está em portugues')
} else {
    console.log('Não está traduzido')
}

// Retorne a largura da janela 

const janela = window.innerWidth;

console.log(janela)


