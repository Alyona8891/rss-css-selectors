import HeaderView from '../components/view/header/headerView';
import View from '../components/view/view';
jest.mock('../components/view/header/header.css', () => ({}));

describe('HeaderView', () => {
    it('should extend View', () => {
        expect(HeaderView.prototype instanceof View).toBe(true);
    });

    it('should have the correct parameters', () => {
        const headerView = new HeaderView();
        expect(headerView.parameters.tag).toBe('header');
        expect(headerView.parameters.tagClasses).toEqual(['header']);
        expect(headerView.parameters.textContent).toBe('');
        expect(headerView.parameters.callback).toBeNull();
    });
});
