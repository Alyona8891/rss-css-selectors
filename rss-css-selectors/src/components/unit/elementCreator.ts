import { CallbackObject, ParamsElementCreator } from '../../types/types';

export default class ElementCreator {
    element: Element | null;
    innerHTML: string | undefined;

    constructor(params: ParamsElementCreator) {
        this.element = null;
        this.createElement(params);
    }

    createElement(params: ParamsElementCreator): void {
        this.element = document.createElement(params.tag);
        this.setClasses(params.tagClases);
        this.setTextContent(params.textContent);
        if (params.callback) {
            this.setCallBack(params.callback);
        }
    }

    getCreatedElement(): Element | HTMLElement | undefined {
        if (this.element) {
            return this.element;
        }
    }

    addInnerElement(element: Element | ElementCreator | undefined): void {
        if (element instanceof ElementCreator) {
            const createdElement = element.getCreatedElement();
            if (createdElement) {
                this.element?.append(createdElement);
            }
        } else {
            if (element) {
                this.element?.append(element);
            }
        }
    }

    setClasses(params: string[] | null): void {
        if (params) {
            params.forEach((className) => this.element?.classList.add(className));
        }
    }

    setTextContent(param: string): void {
        if (this.element) {
            this.element.textContent = param;
        }
    }

    setCallBack(callbackObj: CallbackObject): void {
        if (this.element) {
            Object.entries(callbackObj).forEach(([key, value]) => {
                this.element?.addEventListener(key, value);
            });
        }
    }
}
