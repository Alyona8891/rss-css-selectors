import './levelsBlock.css';
import { StateArray, ParametersElementCreator, State } from '../../../../types/types';
import View from '../../view';
import ElementCreator from '../../../unit/elementCreator';
import detectCurrentLevel from '../../../functions/detectCurrentLevel';
import App from '../../../app/app';

export default class LevelsBlockView extends View {
    firstState: State;
    currentState: State;
    arrElements: HTMLElement[];
    constructor(state: State) {
        const parameters: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['levelsBlockContainer'],
            textContent: 'Level',
            callback: null,
        };
        super(parameters);
        this.firstState = state;
        this.arrElements = [];
        this.currentState = state;
        this.configView(this.firstState);
    }

    configView(state: State): void {
        Object.entries(state).forEach(([key, value]) => {
            const parametersLevelContainer: ParametersElementCreator = {
                tag: 'div',
                tagClasses: ['level-container'],
                textContent: '',
                callback: {
                    click: (event: Event): void => {
                        let currentElement: ParentNode | HTMLElement | null = null;
                        const target = event.target as HTMLElement;
                        if (target.classList.contains('level-container')) {
                            currentElement = target;
                        } else {
                            if (target) {
                                currentElement = target.parentNode;
                            }
                        }
                        let index = 0;
                        if (currentElement && currentElement instanceof HTMLElement) {
                            index = this.arrElements.indexOf(currentElement);
                        }
                        const currentStateArr = Object.entries(this.currentState).map(([key, value], i) => {
                            value.isCurrentLevel = false;
                            if (i === index) {
                                value.isCurrentLevel = true;
                            }
                            return [key, value];
                        }) as unknown as StateArray;
                        const newCurrentState = Object.fromEntries(currentStateArr) as unknown as State;
                        this.currentState = newCurrentState;
                        localStorage.setItem('alyonaState', JSON.stringify(this.currentState));
                        this.rewrite(this.currentState);
                        detectCurrentLevel(this.currentState);
                        const bodyElement = document.querySelector('body');
                        while (bodyElement?.firstElementChild) {
                            bodyElement.firstElementChild.remove();
                        }
                        new App();
                    },
                },
            };
            const levelContainerElement = new ElementCreator(parametersLevelContainer);
            const createdLevelContainerElement = levelContainerElement.getCreatedElement();
            if (createdLevelContainerElement instanceof HTMLElement) {
                this.arrElements.push(createdLevelContainerElement);
            }
            if (value.isCurrentLevel) {
                levelContainerElement.getCreatedElement()?.classList.add('current');
            }
            if (this.elementCreator) {
                this.elementCreator.addInnerElement(levelContainerElement);
            }
            const parametersCheckMarkElement: ParametersElementCreator = {
                tag: 'span',
                tagClasses: ['check-mark'],
                textContent: '',
                callback: null,
            };
            const checkMarkElement = new ElementCreator(parametersCheckMarkElement);
            levelContainerElement.addInnerElement(checkMarkElement);
            if (value.isFinished) {
                checkMarkElement.getCreatedElement()?.classList.add('check-mark-finished');
            }
            const parametersLevelNumberElement: ParametersElementCreator = {
                tag: 'span',
                tagClasses: ['level-num'],
                textContent: `${key}`,
                callback: null,
            };
            const levelNumberElement = new ElementCreator(parametersLevelNumberElement);
            levelContainerElement.addInnerElement(levelNumberElement);
            const parametersStateLevelElement: ParametersElementCreator = {
                tag: 'span',
                tagClasses: ['state-with-help'],
                textContent: '(with help)',
                callback: null,
            };
            const stateLevelElement = new ElementCreator(parametersStateLevelElement);
            if (value.isFinished && value.isFinishedWithHelp) {
                stateLevelElement.getCreatedElement()?.classList.add('state-with-help-vis');
            }
            levelContainerElement.addInnerElement(stateLevelElement);
        });
        const parametersButtonResetElement: ParametersElementCreator = {
            tag: 'button',
            tagClasses: ['reset-btn'],
            textContent: 'Reset Progress',
            callback: {
                click: (): void => {
                    const currentStateArr: StateArray = Object.entries(this.currentState).map(([key, value], i) => {
                        value.isCurrentLevel = false;
                        value.isFinished = false;
                        value.isFinishedWithHelp = false;
                        if (i === 0) {
                            value.isCurrentLevel = true;
                        }
                        return [key, value];
                    }) as unknown as StateArray;
                    const newObj = Object.fromEntries(currentStateArr) as unknown as State;
                    this.currentState = newObj;
                    localStorage.setItem('alyonaState', JSON.stringify(this.currentState));
                    const bodyElement = document.querySelector('body');
                    while (bodyElement?.firstElementChild) {
                        bodyElement.firstElementChild.remove();
                    }
                    new App();
                },
            },
        };
        const buttonResetElement = new ElementCreator(parametersButtonResetElement);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(buttonResetElement);
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
