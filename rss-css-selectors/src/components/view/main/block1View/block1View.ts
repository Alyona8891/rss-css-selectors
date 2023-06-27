import './Block1View.css';
import { ParamsElementCreator } from '../../../../types/types';
import ElementCreator from '../../../unit/elementCreator';
import View from '../../view';
import TableView from './tableView/tableView';

const blocksTem = [
    {
        tag: 'plate',
        class: 'strobe',
        child: null,
    },
    {
        tag: 'plate',
        class: 'strobe',
        child: null,
    },
];

export default class Block1View extends View {
    constructor() {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block1'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.configView();
    }

    configView(): void {
        const paramsTableSurf: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['table-surf'],
            textContent: '',
            callback: null,
        };
        const blockTableSurf = new ElementCreator(paramsTableSurf);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(blockTableSurf);
        }
        const paramsTableEdge: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['table-edge'],
            textContent: '',
            callback: null,
        };
        const blockTableEdge = new ElementCreator(paramsTableEdge);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(blockTableEdge);
        }
        const blockTable = new TableView(blocksTem);
        if (blockTableSurf) {
            blockTableSurf.addInnerElement(blockTable.getElementCreator());
        }
    }
}
