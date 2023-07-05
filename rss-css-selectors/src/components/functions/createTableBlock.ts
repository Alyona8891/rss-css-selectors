import { ParamsBlockPlate } from '../../types/types';
import PlateElementCreator from '../unit/plateElementCreator';

function createTableBlock(
    container: HTMLElement,
    params: ParamsBlockPlate[],
    arrEl: HTMLElement[] | Element[] | undefined
): void {
    params.forEach((el) => {
        if (el.child) {
            const obj = {
                tag: el.tag,
                tagClases: el.class,
                textContent: '',
                callback: {
                    mouseover: (event: Event): void => {
                        const targ = event.target;
                        if (targ instanceof HTMLElement) {
                            const offsetLeft = targ.offsetLeft;
                            const h = document.querySelector('.helper');
                            const indexTargetEl = arrEl?.indexOf(targ);
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
                    mouseout: (event: Event): void => {
                        const h = document.querySelector('.helper');
                        if (h) {
                            h.classList.remove('visib');
                        }
                        const targ = event.target;
                        if (targ instanceof HTMLElement) {
                            const indexTargetEl = arrEl?.indexOf(targ);
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
            if (obj) {
                const blockTableinner = new PlateElementCreator(obj);
                const p = blockTableinner.getCreatedElement() as HTMLElement;
                if (el.id) {
                    p.id = el.id;
                }
                if (p instanceof HTMLElement) {
                    container.append(p);
                    arrEl?.push(p);
                }
                createTableBlock(p, el.child, arrEl);
            }
        } else {
            const obj = {
                tag: el.tag,
                tagClases: el.class,
                textContent: '',
                callback: {
                    mouseenter: (event: Event): void => {
                        event.stopPropagation();
                        const targ = event.target;
                        if (targ instanceof HTMLElement) {
                            const offsetLeft = targ.offsetLeft;
                            const h = document.querySelector('.helper');
                            const indexTargetEl = arrEl?.indexOf(targ);
                            const arrHtmlLineElem = document.querySelectorAll('.html-line');

                            if (h && h instanceof HTMLElement) {
                                if (typeof indexTargetEl === 'number') {
                                    const o = arrHtmlLineElem[indexTargetEl + 1] as HTMLElement;
                                    o.style.background = 'white';
                                    h.innerText = o.outerText;
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
                            const indexTargetEl = arrEl?.indexOf(targ);
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
            const blockTableinner = new PlateElementCreator(obj);
            const p = blockTableinner.getCreatedElement() as HTMLElement;
            if (el.id) {
                p.id = el.id;
            }
            if (p instanceof HTMLElement) {
                container.append(p);
                arrEl?.push(p);
            }
        }
    });
}

export default createTableBlock;
