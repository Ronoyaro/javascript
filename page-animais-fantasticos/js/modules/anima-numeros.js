//O MutationObserver serve para você verificar se houve alguma mudança na sua página
//Nesse caso utilizamos o observer para observar a mudança de classe que ocorria na
//minha section Numeros
//Quando fosse adicionada a classe 'ativo' ela iria disparar o evento animation e em seguida
//desativar o observador.


export default function initNumeros() {
  const numeros = document.querySelectorAll('[data-numero]')

  function animation() {
    numeros.forEach(numero => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100)
      let start = 0;
  
      const timer = setInterval(() => {
        start += incremento
        numero.innerText = start++;
        if (start > total) {
          clearInterval(timer)
          numero.innerText = total
        }
      }, 30 * Math.random())
    })
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      animation();
      observer.disconnect();
    }
  }
  
  const observer = new MutationObserver(handleMutation)
  const sectionNum = document.querySelector('.numeros')
  
  observer.observe(sectionNum, { attributes: true })
}




