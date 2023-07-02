import './inputElement.css';
import { ParamsElementCreator } from '../../types/types';
import ElementCreator from './elementCreator';

export default class InputElementCreator extends ElementCreator {
    inputElement: HTMLInputElement | undefined;
    pseudoInputElement: HTMLDivElement | undefined;
    prePseudoInputElement: HTMLPreElement | undefined;
    codePseudoInputElement: HTMLElement | undefined;
    createElement(params: ParamsElementCreator): void {
        this.element = document.createElement('div');
        this.element.classList.add('input-container');
        this.inputElement = document.createElement('input');
        this.inputElement.setAttribute('type', 'text');
        this.inputElement.setAttribute('placeholder', 'Type in CSS selector');
        this.element.append(this.inputElement);
        this.prePseudoInputElement = document.createElement('pre');
        this.codePseudoInputElement = document.createElement('code');
        this.prePseudoInputElement.append(this.codePseudoInputElement);
        this.pseudoInputElement = document.createElement('div');
        this.pseudoInputElement.classList.add('pseudo-input');
        this.pseudoInputElement.classList.add('language-css');
        this.codePseudoInputElement.append(this.pseudoInputElement);
        this.element.append(this.prePseudoInputElement);
        if (params.callback) {
            this.setCallBack(params.callback);
        }
    }

    setValue(value: string): void {
        if (this.inputElement) {
            this.inputElement.value = value;
        }
    }
}
