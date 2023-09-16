// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function changeColorBody() {
  document.body.classList.toggle('color')
}

// for (let i = 0; i < 10; i++){
//   setTimeout(changeColorBody, 2000 * i)
// }

// setInterval(changeColorBody, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const counter = document.querySelector('[data-text]');
const buttonStart = document.querySelector('[data-start]');
const buttonPause = document.querySelector('[data-pause]');
const buttonReset = document.querySelector('[data-reset]');

function cronometer() {
  let i = 1;
  function startCronometer() {
     counterInterval = setInterval(() => {
      counter.innerText = i++;
    }, 100)
    this.setAttribute('disabled', '')
    passThroughCronometer(this, counterInterval)
  }

  function passThroughCronometer(element, counter) {
    buttonPause.addEventListener('dblclick', stopCronometer)
    
    function stopCronometer() {
      clearInterval(counter)
      element.removeAttribute('disabled')
    }
    
  }
  buttonStart.addEventListener('click', startCronometer)
  buttonReset.addEventListener('click', () => {
    counter.innerText = 0;
    i = 0;
    
  })
}

cronometer();




