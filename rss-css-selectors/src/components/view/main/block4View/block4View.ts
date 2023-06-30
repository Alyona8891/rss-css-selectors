import './block4.css';
import { ParamsElementCreator, State } from '../../../../types/types';
//import ElementCreator from '../../../unit/elementCreator';
//import InputElementCreator from '../../../unit/inputElementCreator';
import View from '../../view';
import ElementCreator from '../../../unit/elementCreator';
const state = {
    1: {
        isFinished: true,
        isFinishedWithHelp: true,
    },
    2: {
        isFinished: true,
        isFinishedWithHelp: false,
    },
    3: {
        isFinished: false,
        isFinishedWithHelp: false,
    },
    4: {
        isFinished: false,
        isFinishedWithHelp: false,
    },
    5: {
        isFinished: false,
        isFinishedWithHelp: false,
    },
    6: {
        isFinished: false,
        isFinishedWithHelp: false,
    },
    7: {
        isFinished: false,
        isFinishedWithHelp: false,
    },
    8: {
        isFinished: false,
        isFinishedWithHelp: false,
    },
    9: {
        isFinished: false,
        isFinishedWithHelp: false,
    },
    10: {
        isFinished: false,
        isFinishedWithHelp: false,
    },
};

export default class Block4View extends View {
    constructor() {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block4'],
            textContent: 'Level',
            callback: null,
        };
        super(params);
        this.configView(state);
    }

    configView(state: State): void {
        Object.entries(state).forEach(([key, value]) => {
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
            if (value.isFinished) {
                checkMark.getCreatedElement()?.classList.add('check-mark-finished');
            }
            const paramsLevelNum: ParamsElementCreator = {
                tag: 'span',
                tagClases: ['level-num'],
                textContent: `${key}`,
                callback: null,
            };
            const levelNum = new ElementCreator(paramsLevelNum);
            levelContainer.addInnerElement(levelNum);
            const paramsStateWithHelp: ParamsElementCreator = {
                tag: 'span',
                tagClases: ['state-with-help'],
                textContent: '(with help)',
                callback: null,
            };
            const stateWithHelp = new ElementCreator(paramsStateWithHelp);
            if (value.isFinished && value.isFinishedWithHelp) {
                stateWithHelp.getCreatedElement()?.classList.add('state-with-help-vis');
            }
            levelContainer.addInnerElement(stateWithHelp);
        });
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
