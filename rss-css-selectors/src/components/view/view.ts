import { ParamsElementCreator } from '../../types/types';
import ElementCreator from '../unit/elementCreator';

interface CustomElement extends HTMLElement {
    getCreatedElement(): Element | HTMLElement;
    addInnerElement(element: HTMLElement | ElementCreator | undefined): Element;
}

export default class View {
    elementCreator: CustomElement | null;

    constructor(params: ParamsElementCreator) {
        this.elementCreator = this.createView(params);
    }

    getElementCreator(): Element | undefined {
        if (this.elementCreator) {
            return this.elementCreator.getCreatedElement();
        }
    }

    createView(params: ParamsElementCreator): CustomElement | null {
        const elementCreator = new ElementCreator(params) as unknown as CustomElement | null;
        return elementCreator;
    }
}
