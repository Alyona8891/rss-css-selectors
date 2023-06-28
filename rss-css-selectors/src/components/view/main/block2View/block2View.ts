import './block2.css';
import { ParamsElementCreator } from '../../../../types/types';
import ElementCreator from '../../../unit/elementCreator';
import View from '../../view';
import InputElementCreator from '../../../unit/inputElementCreator';

export default class Block2View extends View {
    valueInput: string;
    constructor() {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block2'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.valueInput = '';
        this.configView();
    }

    configView(): void {
        const paramsEditorHeaderContainer: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['editor-header_container'],
            textContent: '',
            callback: null,
        };
        const editorHeaderContainer = new ElementCreator(paramsEditorHeaderContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(editorHeaderContainer);
        }
        const paramsEditorHeaderFileName: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['file-name'],
            textContent: 'CSS Editor',
            callback: null,
        };
        const editorHeaderFileName = new ElementCreator(paramsEditorHeaderFileName);
        editorHeaderContainer.addInnerElement(editorHeaderFileName);
        const paramsEditorHeaderFileWind: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['file-window'],
            textContent: 'style.css',
            callback: null,
        };
        const editorHeaderFileWind = new ElementCreator(paramsEditorHeaderFileWind);
        editorHeaderContainer.addInnerElement(editorHeaderFileWind);
        const paramLineNumbers: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['line-numbers'],
            textContent: '1 2 3 4 5 6 7 8 9 10',
            callback: null,
        };
        const lineNumbers = new ElementCreator(paramLineNumbers);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(lineNumbers);
        }

        const inputParams: ParamsElementCreator = {
            tag: 'input',
            tagClases: [],
            textContent: '',
            callback: (event) => this.keyupHandler(event),
        };
        const creatorInput = new InputElementCreator(inputParams);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(creatorInput);
        }

        const paramsEnterBtnContainer: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['enterBtn-container'],
            textContent: '',
            callback: null,
        };
        const enterBtnContainer = new ElementCreator(paramsEnterBtnContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(enterBtnContainer);
        }
        const paramsEnterBtn: ParamsElementCreator = {
            tag: 'button',
            tagClases: ['enter-button'],
            textContent: 'Enter',
            callback: () => alert(this.valueInput),
        };
        const enterBtn = new ElementCreator(paramsEnterBtn);
        enterBtnContainer.addInnerElement(enterBtn);
    }
    keyupHandler(event: Event | undefined): void {
        if (event?.target instanceof HTMLInputElement) {
            this.valueInput = event.target.value;
        }
    }
}
