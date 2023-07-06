import './image.css';
import { ParametersElementCreator } from '../../../../types/types';
import View from '../../view';

export default class ImageView extends View {
    constructor(attributes: Record<string, string>[]) {
        const parameters: ParametersElementCreator = {
            tag: 'img',
            tagClases: ['logo'],
            textContent: '',
            callback: null,
        };
        super(parameters);
        this.setAttribute(attributes);
    }

    setAttribute(attributes: Record<string, string>[]): void {
        attributes.forEach((el) => this.elementCreator?.getCreatedElement().setAttribute(el.name, el.value));
    }
}
