import './table.css';
import { ParametersElementCreator } from '../../../../../types/types';
import View from '../../../view';
import { ParamsBlockPlate } from '../../../../../types/types';
import ElementCreator from '../../../../unit/elementCreator';
import createTableBlock from '../../../../functions/createTableBlock/createTableBlock';
import savedArrElements from '../../../../../data/savedArrElements';

export default class TableView extends View {
    arr: HTMLElement[] | Element[] | undefined;
    paramsGameBlock: ParamsBlockPlate[];
    constructor(paramsGameBlock: ParamsBlockPlate[]) {
        const parameters: ParametersElementCreator = {
            tag: 'div',
            tagClases: ['table'],
            textContent: '',
            callback: null,
        };
        super(parameters);
        this.paramsGameBlock = paramsGameBlock;
        this.arr = [];
        this.configView(this.paramsGameBlock);
    }

    configView(paramsGameBlock: ParamsBlockPlate[]): void {
        const parametersHelperElement = {
            tag: 'div',
            tagClases: ['helper'],
            textContent: '',
            callback: null,
        };
        const classHelperElement = new ElementCreator(parametersHelperElement);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(classHelperElement);
        }
        const createdElement = this.elementCreator?.getCreatedElement() as HTMLElement;
        createTableBlock(createdElement, paramsGameBlock, this.arr);
        while (savedArrElements.length > 0) {
            savedArrElements.pop();
        }
        this.arr?.forEach((el: Element): number => savedArrElements.push(el));
    }
}
