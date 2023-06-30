import { ParamsElementCreator } from '../../types/types';
import ElementCreator from './elementCreator';

export default class PlateElementCreator extends ElementCreator {
    createElement(params: ParamsElementCreator): void {
        this.element = document.createElement(params.tag);
        this.setClasses(params.tagClases);
        this.setTextContent(params.textContent);
        if (params.callback) {
            this.setCallBack(params.callback);
        }
    }
}
