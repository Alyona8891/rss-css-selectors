import ElementCreator from '../components/unit/elementCreator';
import shakeElement from '../components/view/main/cssEditor/shakeElement';

describe('shakeElement', () => {
    test('should add animation to HTMLElement', () => {
        const createdElement: ElementCreator = new ElementCreator({
            tag: 'div',
            tagClasses: ['container'],
            textContent: '',
            callback: null,
        });
        shakeElement(createdElement);
        const createdHtmlElement = createdElement.getCreatedElement() as HTMLElement;
        expect(createdHtmlElement.style.animation).toContain('.1s 3');
    });
});
