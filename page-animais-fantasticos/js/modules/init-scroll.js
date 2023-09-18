export default function initScrolling() {
  function animaScroll() {
    
    const sections = document.querySelectorAll('[data-scroll="scroll"]');
    const windowCalc = window.innerHeight * 0.8;
    if (sections.length) {
      sections.forEach(section => {
        const sectionClass = section.getBoundingClientRect().top - windowCalc;
        if (sectionClass < 0) {
          section.classList.add(section.dataset.scroll)
        };

      });
    };
  };

  animaScroll()

  window.addEventListener('scroll', animaScroll)
}