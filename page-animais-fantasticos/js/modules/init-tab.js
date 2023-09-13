export default function initTab() {
  //Criar a classe no css pra manipular no Javascript

  //Selecionar os elementos a serem manipulados
  const tabAnimal = document.querySelectorAll('[data-tab-li] li');
  const tabContent = document.querySelectorAll('[data-anime]');

  //Primeiro crie uma função que recebe um número como argumento em que adicionará uma classe ativo para cada item da Array da TabContent.
  //Primeiro ela removerá de todos caso possua a classe e em seguida adicionará apenas ao que está sendo selecionado
  
  if (tabAnimal.length && tabContent.length) {
    tabContent[0].classList.add(tabContent[0].dataset.anime);

    function activeTab(index) {
      tabContent.forEach(section => section.classList.remove(section.dataset.anime));
      tabContent[index].classList.add(tabContent[index].dataset.anime);
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
}





