import ElementCreator from '../../../unit/elementCreator';

function shakeElement(element: ElementCreator): void {
    const createdElement = element.getCreatedElement() as HTMLElement;
    createdElement.style.animation = 'shake .1s 3';
    setTimeout(() => {
        createdElement.style.animation = '';
    }, 3000);
}
export default shakeElement;
