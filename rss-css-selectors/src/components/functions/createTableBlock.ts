import { ParamsBlockPlate } from '../../types/types';
import PlateElementCreator from '../unit/plateElementCreator';

function createTableBlock(
    container: HTMLElement,
    arr: ParamsBlockPlate[],
    arrEl?: HTMLElement[] | Element[] | undefined
): void {
    const arrNew: HTMLElement[] = [];
    arr.forEach((el) => {
        const div = document.createElement('div');
        if (typeof el.child !== 'string' && el.child) {
            createTableBlock(div, el.child);
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
                                //const indexTargetEl = this.arr?.indexOf(targ);
                                const arrHtmlLineElem = document.querySelectorAll('.html-line');

                                if (h && h instanceof HTMLElement) {
                                    /*if (typeof indexTargetEl === 'number') {
                                        const o = arrHtmlLineElem[indexTargetEl + 1] as HTMLElement;
                                        o.style.background = 'white';
                                        h.innerText = o.innerText;
                                    }*/
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
                                //const indexTargetEl = this.arr?.indexOf(targ);
                                const arrHtmlLineElem = document.querySelectorAll('.html-line');
                                /*if (typeof indexTargetEl === 'number') {
                                    const o = arrHtmlLineElem[indexTargetEl + 1] as HTMLElement;
                                    o.style.removeProperty('background');
                                }*/
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
            const p = blockTableinner.getCreatedElement();
            if (p instanceof HTMLElement) {
                container.append(p);
                arrEl?.push(p);
            }
        }
    });
}
