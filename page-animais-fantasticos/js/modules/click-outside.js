export default function outsideClick(element, events, callback) {
  const html = document.documentElement
  const attributeData = 'data-outside'
  
  if(!element.hasAttribute(attributeData)){
    events.forEach(userEvent => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick)
      })
    })
    element.setAttribute(attributeData, '')
  }
  function handleOutsideClick(event) { 
    if (!element.contains(event.target)) {  
      //Só faça isso se onde eu clicar não esteja dentro do elemento passado  
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick) //Quando a função ja foi realizada remover o EventListener de html.
      })
      element.removeAttribute(attributeData)
      callback(); //callback é o chamado para a função de remover a classe
                  //essa função só ocorrerá caso o event.target não faça parte do meu element(minha Li)
    } 
  }
}


