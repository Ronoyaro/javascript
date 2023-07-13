function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        //Se você passar essa função no console activeTab(index), o index é o número que você estar percorrendo pela Array.
        //Sem o forEach toda vez que você adicionasse a classe ela só seria adicionada e não removida, o forEach resolve esse problema. 

        //Aqui você criou sua função chamada de activeTab e passou o que você quer que seja feito dentro dela. Perceba que você está interagindo com a tabContent que é uma array

        function activeTab(index) {
            tabContent.forEach((content) => {
                content.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');

        }

        //Agora você precisa chamar essa função ativando pelo EventListener do TabMenu, não se esqueça de que como se trata de uma QuerySelectorAll você precisa fazer como um forEach.

        tabMenu.forEach((menu, index) => {
            menu.addEventListener('click', () => {
                activeTab(index);
                //Dentro do eventListener você chamou uma nova função para chamar a função 
                //Para que isso não venha a causar nenhum problema.
                //Se lembre que você estava querendo falar com o index tanto do tabMenu, quanto do tabContent
            });
        });
    };
};
initTabNav();

function initAccordion() {


    const askFaq = document.querySelectorAll('.js-accordion dt');
    const createClass = 'ativo';
    // const ddAtivo = document.querySelector('.faq dd');

    if (askFaq.length) {
        askFaq[0].nextElementSibling.classList.add(createClass);
        // ddAtivo.classList.add('ativo');

        //click possui Eventos, tipo EVENT.TARGET/EVENT.CURRENTTARGET
        function activeAccordion() {
            this.classList.toggle(createClass);
            this.nextElementSibling.classList.toggle(createClass);
        }

        askFaq.forEach((ask) => {
            ask.addEventListener('click', activeAccordion)
        })
    }
}

initAccordion();













function codePodre() {
    //CODIGO QUE EU FIZ PODRE LIXO
    const faq = document.querySelectorAll('.js-accordion dt');
    const faqTexto = document.querySelectorAll('.js-accordion dd');
    function activeTab(index) {
        faqTexto[index].classList.toggle('ativo');
    };

    faq.forEach((askFaq, index) => {
        askFaq.addEventListener('click', function () {
            activeTab(index);
        });
    });
}










// function activeTab(index) {
//     tabContent.forEach((content) => {
//         content.classList.remove('ativo');
//     });
//     tabContent[index].classList.add('ativo');
// }

// tabMenu.forEach((menu, index) => {
//     menu.addEventListener('click', () => {
//         activeTab(index);
//     });
// });