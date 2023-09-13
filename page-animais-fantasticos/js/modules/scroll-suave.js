export default function initScroll() {

  const linkInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    });
  };

  linkInternos.forEach(link => link.addEventListener('click', scrollToSection));
}