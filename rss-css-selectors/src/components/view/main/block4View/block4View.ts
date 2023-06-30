import './block4.css';
import { NewArr, ParamsElementCreator, State } from '../../../../types/types';
//import ElementCreator from '../../../unit/elementCreator';
//import InputElementCreator from '../../../unit/inputElementCreator';
import View from '../../view';
import ElementCreator from '../../../unit/elementCreator';

export default class Block4View extends View {
    firstState: State;
    currentState: State;
    arrElements: HTMLElement[];
    constructor(stateEnter: State) {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block4'],
            textContent: 'Level',
            callback: null,
        };
        super(params);
        this.firstState = stateEnter;
        this.arrElements = [];
        this.currentState = stateEnter;
        this.configView(this.firstState);
    }

    configView(state: State): void {
        Object.entries(state).forEach(([key, value]) => {
            const paramsLevelContainer: ParamsElementCreator = {
                tag: 'div',
                tagClases: ['level-container'],
                textContent: '',
                callback: {
                    click: (event: Event): void => {
                        let curElement: ParentNode | HTMLElement | null = null;
                        const htmlTarget = event.target as HTMLElement;
                        if (htmlTarget.classList.contains('level-container')) {
                            curElement = htmlTarget;
                        } else {
                            if (htmlTarget) {
                                curElement = htmlTarget.parentNode;
                            }
                        }

                        let index = 0;
                        if (curElement && curElement instanceof HTMLElement) {
                            index = this.arrElements.indexOf(curElement);
                        }
                        const newArr = Object.entries(this.currentState).map(([key, value], i) => {
                            value.isCurrentTask = false;
                            if (i === index) {
                                value.isCurrentTask = true;
                            }
                            return [key, value];
                        }) as unknown as NewArr;
                        const newObj = Object.fromEntries(newArr) as unknown as State;
                        this.currentState = newObj;
                        this.rewrite(this.currentState);
                    },
                },
            };
            const levelContainer = new ElementCreator(paramsLevelContainer);
            const h = levelContainer.getCreatedElement();
            if (h instanceof HTMLElement) {
                this.arrElements.push(h);
            }
            if (value.isCurrentTask) {
                levelContainer.getCreatedElement()?.classList.add('current');
            }
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
            callback: {
                click: (): void => {
                    const newArr = Object.entries(this.currentState).map(([key, value], i) => {
                        value.isCurrentTask = false;
                        value.isFinished = false;
                        value.isFinishedWithHelp = false;
                        if (i === 0) {
                            value.isCurrentTask = true;
                        }
                        return [key, value];
                    }) as unknown as NewArr;
                    const newObj = Object.fromEntries(newArr) as unknown as State;
                    this.currentState = newObj;
                    this.rewrite(this.currentState);
                },
            },
        };
        const btnReset = new ElementCreator(paramsBtnReset);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(btnReset);
        }
    }
    rewrite(state: State): void {
        const htmlElement = this.elementCreator?.getCreatedElement();
        while (htmlElement?.firstElementChild) {
            htmlElement.firstElementChild.remove();
        }
        this.arrElements = [];
        this.configView(state);
    }
}
