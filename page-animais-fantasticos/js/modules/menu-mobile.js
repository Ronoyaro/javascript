import outsideClick from "./click-outside.js"

export default function initMenuMobile() {
  const menu = document.querySelector('[data-menu="list"]')
  const button = document.querySelector('[data-menu="button"]')
  const events = ['click']
  
  if (button && menu) {
    function openMenu(event) {
      // event.stopPropagation() //outra maneira de usar

      button.classList.add('active')
      menu.classList.add('active');

      outsideClick(menu, events, () => {
        menu.classList.remove('active');
        button.classList.remove('active');
      })
    }

    events.forEach(event => button.addEventListener('click', openMenu))
  }


}


