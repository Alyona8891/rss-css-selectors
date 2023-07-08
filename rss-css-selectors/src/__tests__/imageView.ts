import ImageView from '../components/view/footer/image/imageView';
import View from '../components/view/view';
jest.mock('../components/view/footer/image/image.css', () => ({}));

describe('ElementCreator', () => {
    let elementCreator: ImageView;

    beforeEach(() => {
        elementCreator = new ImageView([
            {
                name: 'src',
                value: 'https://rs.school/images/rs_school_js.svg',
            },
            {
                name: 'alt',
                value: 'rs logo',
            },
        ]);
    });

    it('should extend View', () => {
        expect(ImageView.prototype instanceof View).toBe(true);
    });

    it('should create an element with the attributes', () => {
        elementCreator.setAttribute([
            {
                name: 'src',
                value: 'https://google.com',
            },
            {
                name: 'alt',
                value: 'google',
            },
        ]);
        expect(elementCreator.getElementCreator()?.getAttribute('src')).toBe('https://google.com');
        expect(elementCreator.getElementCreator()?.getAttribute('alt')).toBe('google');
    });
});
