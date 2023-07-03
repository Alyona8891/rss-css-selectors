import './table.css';
import { ParamsElementCreator } from '../../../../../types/types';
import View from '../../../view';
import { ParamsBlockPlate } from '../../../../../types/types';
import ElementCreator from '../../../../unit/elementCreator';
import PlateElementCreator from '../../../../unit/plateElementCreator';
import hljs from 'highlight.js/lib/core';

export default class TableView extends View {
    arr: HTMLElement[] | Element[] | undefined;
    constructor(blocksTem: ParamsBlockPlate[]) {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['table'],
            textContent: '',
            callback: null,
        };
        super(params);
        const my = blocksTem;
        this.arr = [];
        this.configView(my);
        this.recurse(my);
    }

    configView(my: ParamsBlockPlate[]): void {
        const paramsHelper = {
            tag: 'div',
            tagClases: ['helper'],
            textContent: '',
            callback: null,
        };
        const helper = new ElementCreator(paramsHelper);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(helper);
        }
    }

    recurse(arr: ParamsBlockPlate[]): void {
        arr.forEach((el) => {
            if (typeof el.child !== 'string' && el.child) {
                this.recurse(el.child);
            } else {
                let obj;
                if (el.class) {
                    obj = {
                        tag: el.tag,
                        tagClases: [el.class],
                        textContent: '',
                        callback: {
                            mouseenter: (event: Event): void => {
                                const targ = event.target;
                                if (targ instanceof HTMLElement) {
                                    const offsetLeft = targ.offsetLeft;
                                    const h = document.querySelector('.helper');
                                    const indexTargetEl = this.arr?.indexOf(targ);
                                    const arrHtmlLineElem = document.querySelectorAll('.html-line');

                                    if (h && h instanceof HTMLElement) {
                                        if (typeof indexTargetEl === 'number') {
                                            const o = arrHtmlLineElem[indexTargetEl + 1] as HTMLElement;
                                            o.style.background = 'white';
                                            h.innerText = o.innerText;
                                        }
                                        targ?.classList.add('hovered');
                                        h.style?.setProperty('left', `${offsetLeft}px`);
                                    }
                                    if (h) {
                                        h.classList.add('visib');
                                    }
                                }
                            },
                            mouseleave: (event: Event): void => {
                                const h = document.querySelector('.helper');
                                if (h) {
                                    h.classList.remove('visib');
                                }
                                const targ = event.target;
                                if (targ instanceof HTMLElement) {
                                    const indexTargetEl = this.arr?.indexOf(targ);
                                    const arrHtmlLineElem = document.querySelectorAll('.html-line');
                                    if (typeof indexTargetEl === 'number') {
                                        const o = arrHtmlLineElem[indexTargetEl + 1] as HTMLElement;
                                        o.style.removeProperty('background');
                                    }
                                    targ?.classList.remove('hovered');
                                }
                            },
                        },
                    };
                } else {
                    obj = {
                        tag: el.tag,
                        tagClases: null,
                        textContent: '',
                        callback: {
                            mouseenter: (event: Event): void => {
                                const targ = event.target;
                                if (targ instanceof HTMLElement) {
                                    targ?.classList.add('hovered');
                                    const offsetLeft = targ.offsetLeft;
                                    const h = document.querySelector('.helper');
                                    if (h && h instanceof HTMLElement) {
                                        h.style?.setProperty('left', `${offsetLeft}px`);
                                    }
                                    if (h) {
                                        h.classList.add('visib');
                                    }
                                }
                            },
                            mouseleave: (event: Event): void => {
                                const h = document.querySelector('.helper');
                                if (h) {
                                    h.classList.remove('visib');
                                }
                                const targ = event.target;
                                if (targ instanceof HTMLElement) {
                                    targ?.classList.remove('hovered');
                                }
                            },
                        },
                    };
                }
                const blockTableinner = new PlateElementCreator(obj);
                //blockTableinner.getCreatedElement()?.setAttribute('data-tooltip', '<plate />');
                if (this.elementCreator) {
                    this.elementCreator.addInnerElement(blockTableinner);
                }
                const k = blockTableinner.getCreatedElement();
                if (k instanceof HTMLElement) {
                    this.arr?.push(k);
                }
            }
        });
    }
}
