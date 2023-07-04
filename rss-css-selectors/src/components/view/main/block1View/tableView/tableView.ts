import './table.css';
import { ParamsElementCreator } from '../../../../../types/types';
import View from '../../../view';
import { ParamsBlockPlate } from '../../../../../types/types';
import ElementCreator from '../../../../unit/elementCreator';
import PlateElementCreator from '../../../../unit/plateElementCreator';
import createTableBlock from '../../../../functions/createTableBlock';
import arrPlates from '../../../../../data/arrPlates';

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
            textContent: '',
            callback: null,
        };
        const helper = new ElementCreator(paramsHelper);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(helper);
        }
        const u = this.elementCreator?.getCreatedElement() as HTMLElement;
        createTableBlock(u, my, this.arr);
        while (arrPlates.length > 0) {
            arrPlates.pop();
        }
        this.arr?.forEach((el: Element): number => arrPlates.push(el));
    }
}
