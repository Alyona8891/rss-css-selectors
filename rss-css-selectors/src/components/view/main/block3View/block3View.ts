import './block3.css';
import { ParamsElementCreator, Screenplay } from '../../../../types/types';
import ElementCreator from '../../../unit/elementCreator';
import View from '../../view';
import HTMLViewerView from './htmlViewerView/htmlViewerView';
import screenplays from '../../../../data/data';

interface CustomElement extends HTMLElement {
    getElementCreator(): HTMLElement;
    addInnerElement(element: Element | ElementCreator | undefined): Element;
}

export default class Block3View extends View {
    valueInput: string;
    constructor() {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block3'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.valueInput = '';
        this.configView(screenplays);
    }

    configView(screenplays: Screenplay): void {
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
            textContent: 'HTML Viewer',
            callback: null,
        };
        const editorHeaderFileName = new ElementCreator(paramsEditorHeaderFileName);
        editorHeaderContainer.addInnerElement(editorHeaderFileName);
        const paramsEditorHeaderFileWind: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['file-window'],
            textContent: 'table.html',
            callback: null,
        };
        const editorHeaderFileWind = new ElementCreator(paramsEditorHeaderFileWind);
        editorHeaderContainer.addInnerElement(editorHeaderFileWind);
        const paramLineNumbers: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['line-numbers-html'],
            textContent: '1 2 3 4 5 6 7 8 9 10',
            callback: null,
        };
        const lineNumbers = new ElementCreator(paramLineNumbers);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(lineNumbers);
        }
        const htmlViewer = new HTMLViewerView(screenplays.level1.paramsBlockHtml) as unknown as CustomElement;
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(htmlViewer.getElementCreator());
        }

        /* const inputParams: ParamsElementCreator = {
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
        enterBtnContainer.addInnerElement(enterBtn);*/
    }
    /* keyupHandler(event: Event | undefined): void {
        if (event?.target instanceof HTMLInputElement) {
            this.valueInput = event.target.value;
        }
    } */
}
