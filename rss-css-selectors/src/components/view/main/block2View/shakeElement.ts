import ElementCreator from '../../../unit/elementCreator';

interface CustomElement extends HTMLElement {
    getCreatedElement(): Element | HTMLElement;
    addInnerElement(element: HTMLElement | ElementCreator | undefined): Element;
}

function shakeElement(element: CustomElement): void {
    const createdElement = element.getCreatedElement() as HTMLElement;
    createdElement.style.animation = 'shake .1s 3';
    setTimeout(() => {
        createdElement.style.animation = '';
    }, 3000);
}
export default shakeElement;
