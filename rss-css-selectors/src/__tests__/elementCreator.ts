import ElementCreator from '../components/unit/elementCreator';

describe('ElementCreator', () => {
    let elementCreator: ElementCreator;

    beforeEach(() => {
        elementCreator = new ElementCreator({
            tag: 'div',
            tagClasses: ['class1', 'class2'],
            textContent: 'Hello World',
            callback: {
                click: (): void => {
                    console.log('Clicked');
                },
            },
        });
    });

    it('should create an element with the specified tag', () => {
        expect(elementCreator.getCreatedElement()?.tagName).toBe('DIV');
    });

    it('should add the specified classes to the element', () => {
        expect(elementCreator.getCreatedElement()?.classList.contains('class1')).toBe(true);
        expect(elementCreator.getCreatedElement()?.classList.contains('class2')).toBe(true);
    });

    it('should add inner elements to the created element', () => {
        const innerElement = new ElementCreator({
            tag: 'span',
            tagClasses: [],
            textContent: 'Inner Element',
            callback: null,
        });
        elementCreator.addInnerElement(innerElement);
        expect(elementCreator.getCreatedElement()?.querySelector('span')?.textContent).toBe('Inner Element');
    });
});
