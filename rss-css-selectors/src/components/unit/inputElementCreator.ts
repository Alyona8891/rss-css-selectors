import './inputElement.css';
import { ParametersElementCreator } from '../../types/types';
import ElementCreator from './elementCreator';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/kimbie-dark.css';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css);

export default class InputElementCreator extends ElementCreator {
    inputElement: HTMLInputElement | undefined;
    pseudoInputElement: HTMLDivElement | undefined;
    prePseudoInputElement: HTMLPreElement | undefined;
    codePseudoInputElement: HTMLElement | undefined;
    createElement(parameters: ParametersElementCreator): void {
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
        hljs.highlightElement(this.pseudoInputElement);
        this.codePseudoInputElement.append(this.pseudoInputElement);
        this.element.append(this.prePseudoInputElement);
        if (parameters.callback) {
            this.setCallBack(parameters.callback);
        }
    }

    setValue(value: string): void {
        if (this.inputElement) {
            this.inputElement.value = value;
        }
    }
}
