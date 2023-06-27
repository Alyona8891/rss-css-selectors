import './main.css';
import { ParamsElementCreator } from '../../../types/types';
import View from '../view';
import ElementCreator from '../../unit/elementCreator';
import Block1View from './block1View/block1View';
interface CustomElement extends HTMLElement {
    getElementCreator(): HTMLElement;
    addInnerElement(element: Element | ElementCreator | undefined): Element;
}

export default class MainView extends View {
    constructor() {
        const params: ParamsElementCreator = {
            tag: 'main',
            tagClases: ['main'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.configView();
    }

    configView(): void {
        const paramsTitle: ParamsElementCreator = {
            tag: 'h1',
            tagClases: ['title'],
            textContent: 'Title',
            callback: null,
        };
        const title = new ElementCreator(paramsTitle);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(title);
        }
        const paramsHelpButtonContainer: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['container'],
            textContent: '',
            callback: null,
        };
        const blockHelpContainer = new ElementCreator(paramsHelpButtonContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(blockHelpContainer);
        }
        const paramsHelpButton: ParamsElementCreator = {
            tag: 'button',
            tagClases: ['buttonHelp'],
            textContent: 'button',
            callback: null,
        };
        const buttonHelp = new ElementCreator(paramsHelpButton);
        if (blockHelpContainer) {
            blockHelpContainer.addInnerElement(buttonHelp);
        }
        const paramsBlock4: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block4'],
            textContent: 'Block4',
            callback: null,
        };
        const block4 = new ElementCreator(paramsBlock4);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(block4);
        }

        const block1 = new Block1View() as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block1?.getElementCreator());
        const paramsBlock2: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block2'],
            textContent: 'Block2',
            callback: null,
        };
        const block2 = new ElementCreator(paramsBlock2);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(block2);
        }
        const paramsBlock3: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block3'],
            textContent: 'Block3',
            callback: null,
        };
        const block3 = new ElementCreator(paramsBlock3);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(block3);
        }
    }
}
