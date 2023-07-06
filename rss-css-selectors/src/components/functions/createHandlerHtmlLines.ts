import savedArrElements from '../../data/savedArrElements';
const COLORS = {
    background: 'white',
};

function createHandlerHtmlLines(): void {
    const pseudoarrClassHtmlLineElements = document.querySelectorAll('.html-line');
    const arrClassHtmlLineElements = Array.from(pseudoarrClassHtmlLineElements);
    const elementClassHelper = document.querySelector('.helper');
    pseudoarrClassHtmlLineElements.forEach((el, i) => {
        if (i !== 0) {
            el.addEventListener('mouseover', (event: Event) => {
                const target = event.target;
                event.stopPropagation();
                if (el instanceof HTMLElement) {
                    el.style.background = COLORS.background;
                }
                if (target instanceof HTMLDivElement && elementClassHelper instanceof HTMLElement) {
                    const indexTargetEl = arrClassHtmlLineElements.indexOf(target);
                    savedArrElements[indexTargetEl - 1].classList.add('hovered');
                    elementClassHelper.innerText = target.innerText;
                    elementClassHelper.classList.add('visib');
                    const respondingHtmlLineElement = savedArrElements[indexTargetEl - 1] as HTMLElement;
                    const offsetLeft = respondingHtmlLineElement.offsetLeft;
                    elementClassHelper.style?.setProperty('left', `${offsetLeft}px`);
                }
                if (target instanceof HTMLSpanElement && elementClassHelper instanceof HTMLElement) {
                    if (target.closest('div')) {
                        const indexTargetEl = arrClassHtmlLineElements.indexOf(target.closest('div')!);
                        savedArrElements[indexTargetEl - 1].classList.add('hovered');
                        elementClassHelper.innerText = target.closest('div')!.innerText;
                        elementClassHelper.classList.add('visib');
                        const respondingHtmlLineElement = savedArrElements[indexTargetEl - 1] as HTMLElement;
                        const offsetLeft = respondingHtmlLineElement.offsetLeft;
                        elementClassHelper.style?.setProperty('left', `${offsetLeft}px`);
                    }
                }
            });
        }
    });
    pseudoarrClassHtmlLineElements.forEach((el, i) => {
        if (i !== 0) {
            el.addEventListener('mouseout', (event: Event) => {
                if (el instanceof HTMLElement) {
                    el.style.removeProperty('background');
                }
                const target = event.target;
                if (target instanceof HTMLDivElement && elementClassHelper instanceof HTMLElement) {
                    const indexTargetEl = arrClassHtmlLineElements.indexOf(target);
                    savedArrElements[indexTargetEl - 1].classList.remove('hovered');
                    elementClassHelper.classList.remove('visib');
                }
                if (target instanceof HTMLSpanElement && elementClassHelper instanceof HTMLElement) {
                    if (target.closest('div')) {
                        const indexTargetEl = arrClassHtmlLineElements.indexOf(target.closest('div')!);
                        savedArrElements[indexTargetEl - 1].classList.remove('hovered');
                    }
                    elementClassHelper.classList.remove('visib');
                }
            });
        }
    });
}
export default createHandlerHtmlLines;
