export default function initScrolling() {
  function animaScroll() {

    const sections = document.querySelectorAll('[data-scroll="scroll"]');
    const windowCalc = window.innerHeight * 0.8;
    if (sections.length) {
      sections.forEach(section => {
        const sectionClass = section.getBoundingClientRect().top - windowCalc;
        if (sectionClass < 0) {
          section.classList.add('ativo')
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo')
        }
      });
    };
  };

  animaScroll(); //ativar 

  window.addEventListener('scroll', animaScroll)
}