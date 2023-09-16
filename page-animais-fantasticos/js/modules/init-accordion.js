export default function initAccordion() {
  
  const accordion = document.querySelector('[data-accordion="accordion"]')
  const dataSet = accordion.dataset.accordion
  const accordionList = document.querySelectorAll('[data-accordion="accordion"] dt');
 

  if (accordionList.length) {
    accordionList[0].classList.add(dataSet);
    accordionList[0].nextElementSibling.classList.toggle(dataSet);

    function accordionText() {
      this.classList.toggle(dataSet);
      this.nextElementSibling.classList.toggle(dataSet);
    }

    accordionList.forEach(list => list.addEventListener('click', accordionText));
  };
}