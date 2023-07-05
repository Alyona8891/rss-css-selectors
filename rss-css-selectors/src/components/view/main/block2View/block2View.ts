import './block2.css';
import { NewArr, ParamsElementCreator } from '../../../../types/types';
import ElementCreator from '../../../unit/elementCreator';
import View from '../../view';
import InputElementCreator from '../../../unit/inputElementCreator';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/rainbow.css';
import compareArrays from '../../../functions/compareArrays';
import App from '../../../app/app';
import state from '../../../../data/state';
hljs.registerLanguage('css', css);

export default class Block2View extends View {
    valueInput: string;
    value: string | undefined;
    constructor() {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block2'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.valueInput = '';
        this.configView();
    }

    configView(): void {
        const paramsEditorHeaderContainer: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['editor-header_container'],
            textContent: '',
            callback: null,
        };
        const editorHeaderContainer = new ElementCreator(paramsEditorHeaderContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(editorHeaderContainer);
        }
        const paramsEditorHeaderFileName: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['file-name'],
            textContent: 'CSS Editor',
            callback: null,
        };
        const editorHeaderFileName = new ElementCreator(paramsEditorHeaderFileName);
        editorHeaderContainer.addInnerElement(editorHeaderFileName);
        const paramsEditorHeaderFileWind: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['file-window'],
            textContent: 'style.css',
            callback: null,
        };
        const editorHeaderFileWind = new ElementCreator(paramsEditorHeaderFileWind);
        editorHeaderContainer.addInnerElement(editorHeaderFileWind);
        const paramLineNumbers: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['line-numbers'],
            textContent: '',
            callback: null,
        };
        const lineNumbers = new ElementCreator(paramLineNumbers);
        const lineNumbersElement = lineNumbers.getCreatedElement() as HTMLElement;
        lineNumbersElement.innerHTML = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10';
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(lineNumbers);
        }
        const inputParams: ParamsElementCreator = {
            tag: 'input',
            tagClases: [],
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
        const creatorInput = new InputElementCreator(inputParams);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(creatorInput);
        }

        const paramsEnterBtnContainer: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['enterBtn-container'],
            textContent: '',
            callback: null,
        };
        const enterBtnContainer = new ElementCreator(paramsEnterBtnContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(enterBtnContainer);
        }
        const paramsEnterBtn: ParamsElementCreator = {
            tag: 'button',
            tagClases: ['enter-button'],
            textContent: 'Enter',
            callback: {
                click: () => {
                    try {
                        if (this.valueInput.length > 0) {
                            const arrUser = Array.from(document.querySelectorAll(`${this.valueInput}`));
                            const arrTrue = Array.from(document.querySelectorAll('.strobe'));
                            if (compareArrays(arrUser, arrTrue)) {
                                const localAlyonaState = localStorage.getItem('alyonaState');
                                if (localAlyonaState) {
                                    let papsedLocalAlyonaState = JSON.parse(localAlyonaState);
                                    papsedLocalAlyonaState[`${localStorage.alyonaCurentValue}`].isFinished = true;
                                    papsedLocalAlyonaState[`${localStorage.alyonaCurentValue}`].isCurrentTask = false;
                                    if (papsedLocalAlyonaState[`${+localStorage.alyonaCurentValue + 1}`]) {
                                        papsedLocalAlyonaState[`${+localStorage.alyonaCurentValue + 1}`].isCurrentTask =
                                            true;
                                    } else {
                                        const newObj = Object.entries(papsedLocalAlyonaState) as unknown as NewArr;
                                        const l = newObj.find(([key, value]) => {
                                            value.isFinished === false;
                                        });
                                        if (l) {
                                            papsedLocalAlyonaState[`${l[0]}`].isCurrentTask = true;
                                        } else {
                                            papsedLocalAlyonaState = state;
                                        }
                                    }

                                    localStorage.setItem('alyonaState', JSON.stringify(papsedLocalAlyonaState));
                                }
                                const h = document.querySelector('.helper') as HTMLElement;
                                h?.classList.add('visib');
                                h.innerText = 'Level is passed!';
                                h.style.left = '25%';
                                const strobeEls = document.querySelectorAll('.strobe');
                                strobeEls.forEach((el) => el.classList.add('winner'));
                                strobeEls.forEach((el) =>
                                    el.addEventListener('animationend', () => {
                                        const bodyElement = document.querySelector('body');
                                        while (bodyElement?.firstElementChild) {
                                            bodyElement.firstElementChild.remove();
                                        }
                                        const app = new App();
                                    })
                                );
                            } else {
                                if (this.elementCreator) {
                                    const element = this.elementCreator.getCreatedElement() as HTMLElement;
                                    element.style.animation = 'shake .1s 3';
                                    setTimeout(() => {
                                        element.style.animation = '';
                                    }, 3000);
                                }
                            }
                        } else {
                            if (this.elementCreator) {
                                const element = this.elementCreator.getCreatedElement() as HTMLElement;
                                element.style.animation = 'shake .1s 3';
                                setTimeout(() => {
                                    element.style.animation = '';
                                }, 3000);
                            }
                        }
                    } catch {
                        if (this.elementCreator) {
                            const element = this.elementCreator.getCreatedElement() as HTMLElement;
                            element.style.animation = 'shake .1s 3';
                            setTimeout(() => {
                                element.style.animation = '';
                            }, 3000);
                        }
                    }
                },
            },
        };
        const enterBtn = new ElementCreator(paramsEnterBtn);
        enterBtnContainer.addInnerElement(enterBtn);
    }
    keyupHandler(event: Event | undefined): void {
        if (event?.target instanceof HTMLInputElement) {
            this.valueInput = event.target.value;
        }
    }
}
