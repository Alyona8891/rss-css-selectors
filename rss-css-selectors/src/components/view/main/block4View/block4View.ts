import './block4.css';
import { ParamsElementCreator } from '../../../../types/types';
//import ElementCreator from '../../../unit/elementCreator';
//import InputElementCreator from '../../../unit/inputElementCreator';
import View from '../../view';
import ElementCreator from '../../../unit/elementCreator';

export default class Block4View extends View {
    constructor() {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block4'],
            textContent: 'Level',
            callback: null,
        };
        super(params);
        this.configView();
    }

    configView(): void {
        for (let i = 1; i <= 10; i += 1) {
            const paramsLevelContainer: ParamsElementCreator = {
                tag: 'div',
                tagClases: ['level-container'],
                textContent: '',
                callback: null,
            };
            const levelContainer = new ElementCreator(paramsLevelContainer);
            if (this.elementCreator) {
                this.elementCreator.addInnerElement(levelContainer);
            }
            const paramsCheckMark: ParamsElementCreator = {
                tag: 'span',
                tagClases: ['check-mark'],
                textContent: '',
                callback: null,
            };
            const checkMark = new ElementCreator(paramsCheckMark);
            levelContainer.addInnerElement(checkMark);
            const paramsLevelNum: ParamsElementCreator = {
                tag: 'span',
                tagClases: ['level-num'],
                textContent: `${i}`,
                callback: null,
            };
            const levelNum = new ElementCreator(paramsLevelNum);
            levelContainer.addInnerElement(levelNum);
        }
        const paramsBtnReset: ParamsElementCreator = {
            tag: 'button',
            tagClases: ['reset-btn'],
            textContent: 'Reset Progress',
            callback: null,
        };
        const btnReset = new ElementCreator(paramsBtnReset);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(btnReset);
        }
    }
    /*keyupHandler(event: Event | undefined): void {
        if (event?.target instanceof HTMLInputElement) {
            this.valueInput = event.target.value;
        }
    }*/
}
