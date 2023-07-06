import { ParametersElementCreator } from '../../types/types';
import ElementCreator from '../unit/elementCreator';

interface CustomElement extends HTMLElement {
    getCreatedElement(): Element | HTMLElement;
    addInnerElement(element: HTMLElement | ElementCreator | undefined): Element;
}

export default class View {
    elementCreator: CustomElement | null;

    constructor(parameters: ParametersElementCreator) {
        this.elementCreator = this.createView(parameters);
    }

    getElementCreator(): Element | undefined {
        if (this.elementCreator) {
            return this.elementCreator.getCreatedElement();
        }
    }

    createView(parameters: ParametersElementCreator): CustomElement | null {
        const elementCreator = new ElementCreator(parameters) as unknown as CustomElement | null;
        return elementCreator;
    }
}
