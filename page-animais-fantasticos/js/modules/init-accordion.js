export default function initAccordion() {
  
  const accordion = document.querySelector('[data-accordion="accordion"]')
  const dataSet = accordion.dataset.accordion
  const accordionList = document.querySelectorAll('[data-accordion="accordion"] dt');
 

  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.toggle('ativo');

    function accordionText() {
      this.classList.toggle(dataSet);
      this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach(list => list.addEventListener('click', accordionText));
  };
}