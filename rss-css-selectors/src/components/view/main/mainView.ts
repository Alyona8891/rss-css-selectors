import './main.css';
import { ParamsElementCreator } from '../../../types/types';
import View from '../view';
import ElementCreator from '../../unit/elementCreator';
import Block1View from './block1View/block1View';
import Block2View from './block2View/block2View';
import Block3View from './block3View/block3View';
import Block4View from './block4View/block4View';
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
        const block4 = new Block4View() as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block4?.getElementCreator());
        const block1 = new Block1View() as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block1?.getElementCreator());
        const block2 = new Block2View() as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block2?.getElementCreator());
        const block3 = new Block3View() as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block3?.getElementCreator());
    }
}
