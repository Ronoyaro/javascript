const actived = 'ativo';

function initTab() {
  //Criar a classe no css pra manipular no Javascript

  //Selecionar os elementos a serem manipulados
  const tabAnimal = document.querySelectorAll('.js-tab li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  //Primeiro crie uma função que recebe um número como argumento em que adicionará uma classe ativo para cada item da Array da TabContent.
  //Primeiro ela removerá de todos caso possua a classe e em seguida adicionará apenas ao que está sendo selecionado
  if (tabAnimal.length && tabContent.length) {
    tabContent[0].classList.add(actived);

    function activeTab(index) {
      tabContent.forEach(section => section.classList.remove(actived));
      tabContent[index].classList.add(actived);
    };

    //Crie um loop que percorrerá pela TabAnimal para adicionar a função de clique e que passa dentro da função o index da imagem que foi clicada.
    tabAnimal.forEach((picture, index) => {
      picture.addEventListener('click', () => {
        activeTab(index)
      });
    });
  }
  //Dê um display none para a sessão dos textos e quando a section tiver a classe  dê um display block

  //E criar uma keyframe para animar a classe 
} initTab();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if (accordionList.length) {
    accordionList[0].classList.add('up');
    accordionList[0].nextElementSibling.classList.add(actived);

    function accordionText() {
      this.classList.add('up');
      this.nextElementSibling.classList.add(actived);
    }

    accordionList.forEach(list => list.addEventListener('click', accordionText));
  };
} initAccordion();

function initScroll() {

  const linkInternos = document.querySelectorAll('.js-scrollSmooth a[href^="#"]');

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
} initScroll();


function initScrolling() {
  function animaScroll() {
    
    const sections = document.querySelectorAll('.js-animaScroll');
    const windowCalc = window.innerHeight * 0.5;
    if (sections.length) {
      sections.forEach(section => {
        const sectionClass = section.getBoundingClientRect().top - windowCalc;
        if (sectionClass < 0) {
          section.classList.add(actived)
        };

      });
    };
  };

  animaScroll()

  window.addEventListener('scroll', animaScroll)
} initScrolling();

