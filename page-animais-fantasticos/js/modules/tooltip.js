export default function toolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })

  function onMouseOver(event) {
    const tooltipBox = createTooltipDiv(this); //this é a div map //createToolTip é o retorno da função que é a Div criada.

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    //O que fazer quando eu tirar o mouse de cima do this
    onMouseLeave.tooltipBoxDivElement = tooltipBox;
    onMouseLeave.mapElement = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  function createTooltipDiv(element) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    const text = element.getAttribute('aria-label');
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox);

    return tooltipBox; //o retorno é a div criada
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  const onMouseLeave = {
    tooltipBoxDivElement: '',
    mapElement: '',
    handleEvent() {
      this.tooltipBoxDivElement.remove();
      this.mapElement.removeEventListener('mouseleave', onMouseLeave);
      this.mapElement.removeEventListener('mousemove', onMouseMove);
    }
  }
}

