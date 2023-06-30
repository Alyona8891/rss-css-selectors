import './table.css';
import { ParamsElementCreator } from '../../../../../types/types';
import View from '../../../view';
import { ParamsBlockPlate } from '../../../../../types/types';
import ElementCreator from '../../../../unit/elementCreator';
import PlateElementCreator from '../../../../unit/plateElementCreator';

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
    }

    configView(my: ParamsBlockPlate[]): void {
        const paramsHelper = {
            tag: 'div',
            tagClases: ['helper'],
            textContent: '<plate />',
            callback: null,
        };
        const helper = new ElementCreator(paramsHelper);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(helper);
        }
        my.forEach((el: ParamsBlockPlate) => {
            const obj = {
                tag: el.tag,
                tagClases: [el.class],
                textContent: '',
                callback: {
                    mouseenter: (event: Event): void => {
                        const targ = event.target;
                        if (targ instanceof HTMLElement) {
                            targ?.classList.add('hovered');
                            const offsetLeft = targ.offsetLeft;
                            const h = helper.getCreatedElement();
                            if (h && h instanceof HTMLElement) {
                                h.style?.setProperty('left', `${offsetLeft}px`);
                            }
                            helper.getCreatedElement()?.classList.add('visib');
                        }
                    },
                    mouseleave: (event: Event): void => {
                        helper.getCreatedElement()?.classList.remove('visib');
                        const targ = event.target;
                        if (targ instanceof HTMLElement) {
                            targ?.classList.remove('hovered');
                        }
                    },
                },
            };
            const blockTableinner = new PlateElementCreator(obj);
            blockTableinner.getCreatedElement()?.setAttribute('data-tooltip', '<plate />');
            if (this.elementCreator) {
                this.elementCreator.addInnerElement(blockTableinner);
            }
            const k = blockTableinner.getCreatedElement();
            if (k instanceof HTMLElement) {
                this.arr?.push(k);
            }
        });
    }
}
