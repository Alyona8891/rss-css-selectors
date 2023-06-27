import './table.css';
import { ParamsElementCreator } from '../../../../../types/types';
import View from '../../../view';
import { ParamsBlockPlate } from '../../../../../types/types';
import ElementCreator from '../../../../unit/elementCreator';

export default class TableView extends View {
    constructor(blocksTem: ParamsBlockPlate[]) {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['table'],
            textContent: '',
            callback: null,
        };
        super(params);
        const my = blocksTem;
        this.configView(my);
    }

    configView(my: ParamsBlockPlate[]): void {
        my.forEach((el: ParamsBlockPlate) => {
            const obj = {
                tag: el.tag,
                tagClases: [el.class],
                textContent: '',
                callback: null,
            };
            const blockTableinner = new ElementCreator(obj);
            if (this.elementCreator) {
                this.elementCreator.addInnerElement(blockTableinner);
            }
        });
    }
}
