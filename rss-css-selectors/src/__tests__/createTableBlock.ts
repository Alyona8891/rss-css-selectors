import createTableBlock from '../components/functions/createTableBlock/createTableBlock';

describe('createTableBlock', () => {
    let container: HTMLElement;
    let arrayElements: HTMLElement[];

    beforeEach(() => {
        container = document.createElement('div');
        arrayElements = [];
    });

    test('should create an array of elements', () => {
        const elements = [
            {
                tag: 'div',
                class: null,
                id: null,
                child: [
                    {
                        tag: 'div',
                        class: null,
                        id: null,
                        child: null,
                    },
                ],
            },
        ];

        createTableBlock(container, elements, arrayElements);
        expect(arrayElements).toHaveLength(2);
    });
});
