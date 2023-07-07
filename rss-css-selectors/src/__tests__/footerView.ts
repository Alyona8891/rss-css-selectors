import FooterView from '../components/view/footer/footerView';
import View from '../components/view/view';
jest.mock('../components/view/footer/footer.css', () => ({}));
jest.mock('../components/view/footer/link/link.css', () => ({}));
jest.mock('../components/view/footer/image/image.css', () => ({}));

describe('FooterView', () => {
    it('should extend View', () => {
        expect(FooterView.prototype instanceof View).toBe(true);
    });

    it('should have the correct parameters', () => {
        const headerView = new FooterView();
        expect(headerView.parameters.tag).toBe('footer');
        expect(headerView.parameters.tagClasses).toEqual(['footer']);
        expect(headerView.parameters.textContent).toBe('');
        expect(headerView.parameters.callback).toBeNull();
    });
});
