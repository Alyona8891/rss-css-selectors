import InputElementCreator from '../components/unit/inputElementCreator';
jest.mock('../components/unit/inputElement.css', () => ({}));
jest.mock('highlight.js/styles/kimbie-dark.css', () => ({}));

describe('ElementCreator', () => {
    let elementCreator: InputElementCreator;

    beforeEach(() => {
        elementCreator = new InputElementCreator({
            tag: 'input',
            tagClasses: [],
            textContent: '',
            callback: null,
        });
    });

    it('should create an element with the specified tag', () => {
        expect(elementCreator.getCreatedElement()?.tagName).toBe('DIV');
    });

    it('should add attribute type = "text" to inputElement', () => {
        expect(elementCreator.inputElement?.getAttribute('type'))?.toBe('text');
    });

    it('should add the specified classes to the element', () => {
        elementCreator.setValue('value');
        expect(elementCreator.inputElement?.value).toBe('value');
    });
});
