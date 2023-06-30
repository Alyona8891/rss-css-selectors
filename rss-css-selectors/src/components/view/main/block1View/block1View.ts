import './Block1View.css';
import { ParamsElementCreator, Screenplay } from '../../../../types/types';
import ElementCreator from '../../../unit/elementCreator';
import View from '../../view';
import TableView from './tableView/tableView';
import screenplays from '../../../../data/data';

export default class Block1View extends View {
    arr: HTMLElement[] | Element[] | undefined;
    constructor() {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block1'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.arr = [];
        this.configView(screenplays);
    }

    configView(screenplays: Screenplay): void {
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
        const blockTable = new TableView(screenplays?.level1?.paramsBlockPlates);
        if (blockTableSurf) {
            blockTableSurf.addInnerElement(blockTable.getElementCreator());
        }
        this.arr = blockTable.arr;
    }
}
