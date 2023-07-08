import ElementCreator from '../components/unit/elementCreator';
import shakeElement from '../components/view/main/block2View/shakeElement';
interface CustomElement extends HTMLElement {
    getCreatedElement(): Element | HTMLElement;
    addInnerElement(element: HTMLElement | ElementCreator | undefined): Element;
}

describe('shakeElement', () => {
    test('should add animation to HTMLElement', () => {
        const createdElement = new ElementCreator({
            tag: 'div',
            tagClasses: ['container'],
            textContent: '',
            callback: null,
        }) as unknown as CustomElement;
        shakeElement(createdElement);
        const createdHtmlElement = createdElement.getCreatedElement() as HTMLElement;
        expect(createdHtmlElement.style.animation).toContain('.1s 3');
    });
});
