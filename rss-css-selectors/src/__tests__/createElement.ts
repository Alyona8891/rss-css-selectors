import { createElement } from '../components/functions/createTableBlock/createElement';

describe('createElement', () => {
    let container: HTMLElement;
    let arrayElements: HTMLElement[];

    beforeEach(() => {
        container = document.createElement('div');
        arrayElements = [];
    });

    test('should create an element with the specified tag', () => {
        const el = {
            tag: 'div',
            class: null,
            id: null,
            child: null,
        };

        const createdElement = createElement(el, container, arrayElements);

        expect(createdElement.tagName).toBe('DIV');
        expect(arrayElements).toHaveLength(1);
        expect(arrayElements[0]).toBe(createdElement);
    });
});
