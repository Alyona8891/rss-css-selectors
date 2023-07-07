import './Block1View.css';
import { ParamsBlockPlate, ParametersElementCreator } from '../../../../types/types';
import ElementCreator from '../../../unit/elementCreator';
import View from '../../view';
import TableView from './tableView/tableView';

export default class Block1View extends View {
    arr: HTMLElement[] | Element[] | undefined;
    parametersBlockPlates: ParamsBlockPlate[];
    constructor(parametersBlockPlates: ParamsBlockPlate[]) {
        const params: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['block1'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.arr = [];
        this.parametersBlockPlates = parametersBlockPlates;
        this.configView(this.parametersBlockPlates);
    }

    configView(paramsBlockPlates: ParamsBlockPlate[]): void {
        const paramsTableSurf: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['table-surf'],
            textContent: '',
            callback: null,
        };
        const blockTableSurf = new ElementCreator(paramsTableSurf);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(blockTableSurf);
        }
        const paramsTableEdge: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['table-edge'],
            textContent: '',
            callback: null,
        };
        const blockTableEdge = new ElementCreator(paramsTableEdge);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(blockTableEdge);
        }
        const blockTable = new TableView(paramsBlockPlates);
        if (blockTableSurf) {
            blockTableSurf.addInnerElement(blockTable.getElementCreator());
        }
        this.arr = blockTable.arr;
    }
}
