import outsideClick from './click-outside.js'

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')

  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleEvent)
    })
  })
  
  function handleEvent(event) {
    event.preventDefault();
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    });
  };
}


