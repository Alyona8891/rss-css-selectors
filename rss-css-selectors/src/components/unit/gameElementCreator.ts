import { ParametersElementCreator } from '../../types/types';
import ElementCreator from './elementCreator';

export default class GameElementCreator extends ElementCreator {
    createElement(parameters: ParametersElementCreator): void {
        this.element = document.createElement(parameters.tag);
        this.setClasses(parameters.tagClases);
        this.setTextContent(parameters.textContent);
        if (parameters.callback) {
            this.setCallBack(parameters.callback);
        }
    }
}
