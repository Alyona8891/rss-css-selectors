import savedArrElements from '../../../data/savedArrElements';
const COLORS = {
    background: 'white',
};

export function handleElementMouseover(event: Event): void {
    const target = event.target;
    const elementClassHelper = document.querySelector('.helper');
    const arrClassHtmlLineElements = document.querySelectorAll('.html-line');
    if (target instanceof HTMLElement) {
        const offsetLeftTarget = target.offsetLeft;
        const indexTarget = savedArrElements?.indexOf(target);
        if (elementClassHelper && elementClassHelper instanceof HTMLElement) {
            if (typeof indexTarget === 'number') {
                const respondingHtmlLineElement = arrClassHtmlLineElements[indexTarget + 1] as HTMLElement;
                respondingHtmlLineElement.style.background = COLORS.background;
                elementClassHelper.innerText = respondingHtmlLineElement.innerText;
            }
            target?.classList.add('hovered');
            elementClassHelper.style?.setProperty('left', `${offsetLeftTarget}px`);
        }
        if (elementClassHelper) {
            elementClassHelper.classList.add('visib');
        }
    }
}
export function handleElementMouseout(event: Event): void {
    const elementClassHelper = document.querySelector('.helper');
    const arrClassHtmlLineElements = document.querySelectorAll('.html-line');
    if (elementClassHelper) {
        elementClassHelper.classList.remove('visib');
    }
    const target = event.target;
    if (target instanceof HTMLElement) {
        const indexTarget = savedArrElements?.indexOf(target);
        if (typeof indexTarget === 'number') {
            const respondingHtmlLineElement = arrClassHtmlLineElements[indexTarget + 1] as HTMLElement;
            respondingHtmlLineElement.style.removeProperty('background');
        }
        target?.classList.remove('hovered');
    }
}
