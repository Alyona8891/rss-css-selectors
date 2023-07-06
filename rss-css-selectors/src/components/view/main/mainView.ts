import './main.css';
import { ParametersElementCreator, Screenplay, State } from '../../../types/types';
import View from '../view';
import ElementCreator from '../../unit/elementCreator';
import Block1View from './block1View/block1View';
import Block2View from './block2View/block2View';
import Block3View from './block3View/block3View';
import Block4View from './block4View/block4View';
import screenplays from '../../../data/screenplays';
import handlerButtonHelp from './handlerButtonHelp';
import detectCurrentLevel from '../../functions/detectCurrentValue';

interface CustomElement extends HTMLElement {
    getElementCreator(): HTMLElement;
    addInnerElement(element: Element | ElementCreator | undefined): Element;
}

const ButtonHelpTextContent = 'I can help:)';
export default class MainView extends View {
    state: State;
    constructor(state: State) {
        const parameters: ParametersElementCreator = {
            tag: 'main',
            tagClases: ['main'],
            textContent: '',
            callback: null,
        };
        super(parameters);
        this.state = state;
        this.checkState();
        detectCurrentLevel(this.state);
        this.configView(screenplays);
    }

    configView(screenplays: Screenplay): void {
        const parametersTitle: ParametersElementCreator = {
            tag: 'h1',
            tagClases: ['title'],
            textContent: screenplays[`level${localStorage.alyonaCurrentLevel}`].title,
            callback: null,
        };
        const titleElement = new ElementCreator(parametersTitle);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(titleElement);
        }
        const parametersButtonHelpContainer: ParametersElementCreator = {
            tag: 'div',
            tagClases: ['container'],
            textContent: '',
            callback: null,
        };
        const buttonHelpContainer = new ElementCreator(parametersButtonHelpContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(buttonHelpContainer);
        }
        const parametersButtonHelp: ParametersElementCreator = {
            tag: 'button',
            tagClases: ['buttonHelp'],
            textContent: ButtonHelpTextContent,
            callback: {
                click: handlerButtonHelp,
            },
        };
        const buttonHelpElement = new ElementCreator(parametersButtonHelp);
        if (buttonHelpContainer) {
            buttonHelpContainer.addInnerElement(buttonHelpElement);
        }
        const block4 = new Block4View(this.state) as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block4?.getElementCreator());
        const block1 = new Block1View(
            screenplays[`level${localStorage.alyonaCurrentLevel}`].parametersElements
        ) as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block1?.getElementCreator());
        const block2 = new Block2View() as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block2?.getElementCreator());
        const block3 = new Block3View(
            screenplays[`level${localStorage.alyonaCurrentLevel}`].parametersHtmlLines
        ) as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block3?.getElementCreator());
    }

    checkState(): void {
        const localAlyonaState = localStorage.getItem('alyonaState');
        if (localAlyonaState) {
            this.state = JSON.parse(localAlyonaState);
        }
    }
}
