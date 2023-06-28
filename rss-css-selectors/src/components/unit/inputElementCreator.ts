import './inputElement.css';
import { ParamsElementCreator } from '../../types/types';
import ElementCreator from './elementCreator';

export default class InputElementCreator extends ElementCreator {
    inputElement: HTMLInputElement | undefined;
    createElement(params: ParamsElementCreator): void {
        this.element = document.createElement('div');
        this.element.classList.add('input-container');
        this.inputElement = document.createElement('input');
        this.inputElement.setAttribute('type', 'text');
        this.inputElement.setAttribute('autofocus', 'true');
        this.inputElement.setAttribute('placeholder', 'Type in CSS selector');
        this.element.append(this.inputElement);
        if (params.callback) {
            this.setCallback(params.callback);
        }
    }

    setValue(value: string): void {
        if (this.inputElement) {
            this.inputElement.value = value;
        }
    }

    setCallback(callback: (event: Event) => void | null): void {
        this.element?.addEventListener('keyup', (event) => callback(event));
    }
}
