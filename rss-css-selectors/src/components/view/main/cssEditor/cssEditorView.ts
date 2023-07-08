import './cssEditor.css';
import { ParametersElementCreator } from '../../../../types/types';
import ElementCreator from '../../../unit/elementCreator';
import View from '../../view';
import InputElementCreator from '../../../unit/inputElementCreator';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/rainbow.css';
import compareArrays from '../../../functions/compareArrays';
import App from '../../../app/app';
import initialState from '../../../../data/state';
import shakeElement from './shakeElement';
hljs.registerLanguage('css', css);

export default class CssEditorView extends View {
    valueInput: string;
    value: string | undefined;
    constructor() {
        const parameters: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['cssEditorContainer'],
            textContent: '',
            callback: null,
        };
        super(parameters);
        this.valueInput = '';
        this.configView();
    }

    configView(): void {
        const parametersEditorHeaderContainer: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['editor-header_container'],
            textContent: '',
            callback: null,
        };
        const editorHeaderContainerElement = new ElementCreator(parametersEditorHeaderContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(editorHeaderContainerElement);
        }
        const parametersFileNameContainer: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['file-name'],
            textContent: 'CSS Editor',
            callback: null,
        };
        const editorHeaderFileName = new ElementCreator(parametersFileNameContainer);
        editorHeaderContainerElement.addInnerElement(editorHeaderFileName);
        const parametersFileElement: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['file-window'],
            textContent: 'style.css',
            callback: null,
        };
        const editorHeaderFileElement = new ElementCreator(parametersFileElement);
        editorHeaderContainerElement.addInnerElement(editorHeaderFileElement);
        const parametersLineNumbersElement: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['line-numbers'],
            textContent: '',
            callback: null,
        };
        const lineNumbersElement = new ElementCreator(parametersLineNumbersElement);
        const createdLineNumbersElement = lineNumbersElement.getCreatedElement() as HTMLElement;
        createdLineNumbersElement.innerHTML = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10';
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(createdLineNumbersElement);
        }
        const paramsInputElement: ParametersElementCreator = {
            tag: 'input',
            tagClasses: [],
            textContent: '',
            callback: {
                keyup: (event) => this.keyupHandler(event),
                input: (e: Event) => {
                    const el = document.querySelector('.pseudo-input') as HTMLElement;
                    if (e?.target instanceof HTMLInputElement) {
                        el.innerText = e.target?.value;
                    }
                    hljs.highlightElement(el);
                },
            },
        };
        const inputElement = new InputElementCreator(paramsInputElement);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(inputElement);
        }

        const parametersEnterBtnContainer: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['enterBtn-container'],
            textContent: '',
            callback: null,
        };
        const enterButtonContainer = new ElementCreator(parametersEnterBtnContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(enterButtonContainer);
        }
        const parametersEnterBtn: ParametersElementCreator = {
            tag: 'button',
            tagClasses: ['enter-button'],
            textContent: 'Enter',
            callback: {
                click: () => {
                    try {
                        if (this.valueInput.length > 0) {
                            const arrUser = Array.from(document.querySelectorAll(`${this.valueInput}`));
                            const arrTrue = Array.from(document.querySelectorAll('.strobe'));
                            const localAlyonaState = localStorage.getItem('alyonaState');
                            if (compareArrays(arrUser, arrTrue) && localAlyonaState) {
                                let parsedLocalAlyonaState = JSON.parse(localAlyonaState);
                                parsedLocalAlyonaState[`${localStorage.alyonaCurrentLevel}`].isFinished = true;
                                parsedLocalAlyonaState[`${localStorage.alyonaCurrentLevel}`].isCurrentLevel = false;
                                if (parsedLocalAlyonaState[`${+localStorage.alyonaCurrentLevel + 1}`]) {
                                    parsedLocalAlyonaState[`${+localStorage.alyonaCurrentLevel + 1}`].isCurrentLevel =
                                        true;
                                } else {
                                    parsedLocalAlyonaState = initialState;
                                }

                                localStorage.setItem('alyonaState', JSON.stringify(parsedLocalAlyonaState));
                                const elementClassHelper = document.querySelector('.helper') as HTMLElement;
                                elementClassHelper?.classList.add('visib');
                                elementClassHelper.innerText = 'Level is passed!';
                                elementClassHelper.style.left = '25%';
                                const strobeElements = document.querySelectorAll('.strobe');
                                strobeElements.forEach((el) => el.classList.add('winner'));
                                strobeElements.forEach((el) =>
                                    el.addEventListener('animationend', () => {
                                        const bodyElement = document.querySelector('body');
                                        while (bodyElement?.firstElementChild) {
                                            bodyElement.firstElementChild.remove();
                                        }
                                        new App();
                                    })
                                );
                            } else {
                                if (this.elementCreator) {
                                    shakeElement(this.elementCreator);
                                }
                            }
                        } else {
                            if (this.elementCreator) {
                                shakeElement(this.elementCreator);
                            }
                        }
                    } catch {
                        if (this.elementCreator) {
                            shakeElement(this.elementCreator);
                        }
                    }
                },
            },
        };
        const enterBtn = new ElementCreator(parametersEnterBtn);
        enterButtonContainer.addInnerElement(enterBtn);
    }
    keyupHandler(event: Event | undefined): void {
        if (event?.target instanceof HTMLInputElement) {
            this.valueInput = event.target.value;
        }
    }
}
