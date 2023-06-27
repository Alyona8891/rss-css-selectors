import './link.css';
import View from '../../view';
import { ParamsElementCreator } from '../../../../types/types';

export default class LinkView extends View {
    constructor(text: string, attrributesNames: Record<string, string>[]) {
        const params: ParamsElementCreator = {
            tag: 'a',
            tagClases: ['link'],
            textContent: text,
            callback: null,
        };
        super(params);
        this.setAttribute(attrributesNames);
    }

    setAttribute(attrributesNames: Record<string, string>[]): void {
        attrributesNames.forEach((el) => this.elementCreator?.getCreatedElement().setAttribute(el.name, el.value));
    }
}
