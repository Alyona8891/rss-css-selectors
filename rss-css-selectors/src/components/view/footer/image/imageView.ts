import './image.css';
import { ParamsElementCreator } from '../../../../types/types';
import View from '../../view';

export default class ImageView extends View {
    constructor(attrributesNames: Record<string, string>[]) {
        const params: ParamsElementCreator = {
            tag: 'img',
            tagClases: ['logo'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.setAttribute(attrributesNames);
    }

    setAttribute(attrributesNames: Record<string, string>[]): void {
        attrributesNames.forEach((el) => this.elementCreator?.getCreatedElement().setAttribute(el.name, el.value));
    }
}
