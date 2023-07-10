import { ParametersElementCreator } from '../../types/types';
import ElementCreator from '../unit/elementCreator';

export default class View {
    elementCreator: ElementCreator | null;

    constructor(parameters: ParametersElementCreator) {
        this.elementCreator = this.createView(parameters);
    }

    getElementCreator(): Element | undefined {
        if (this.elementCreator) {
            return this.elementCreator.getCreatedElement();
        }
    }

    createView(parameters: ParametersElementCreator): ElementCreator | null {
        const elementCreator: ElementCreator = new ElementCreator(parameters);
        return elementCreator;
    }
}
