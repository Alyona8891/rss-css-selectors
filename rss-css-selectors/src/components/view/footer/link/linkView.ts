import './link.css';
import View from '../../view';
import { ParametersElementCreator } from '../../../../types/types';

export default class LinkView extends View {
    constructor(text: string, attributes: Record<string, string>[]) {
        const parameters: ParametersElementCreator = {
            tag: 'a',
            tagClases: ['link'],
            textContent: text,
            callback: null,
        };
        super(parameters);
        this.setAttribute(attributes);
    }

    setAttribute(attrributesNames: Record<string, string>[]): void {
        attrributesNames.forEach((el) => this.elementCreator?.getCreatedElement().setAttribute(el.name, el.value));
    }
}
