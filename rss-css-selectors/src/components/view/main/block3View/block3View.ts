import './block3.css';
import { ParamsBlockHtmlElem, ParamsElementCreator } from '../../../../types/types';
import ElementCreator from '../../../unit/elementCreator';
import View from '../../view';
import HTMLViewerView from './htmlViewerView/htmlViewerView';

interface CustomElement extends HTMLElement {
    getElementCreator(): HTMLElement;
    addInnerElement(element: Element | ElementCreator | undefined): Element;
}

export default class Block3View extends View {
    valueInput: string;
    paramsBlockHtml: ParamsBlockHtmlElem[];
    constructor(paramsBlockHtml: ParamsBlockHtmlElem[]) {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['block3'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.valueInput = '';
        this.paramsBlockHtml = paramsBlockHtml;
        this.configView(this.paramsBlockHtml);
    }

    configView(paramsBlockHtml: ParamsBlockHtmlElem[]): void {
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
        const htmlViewer = new HTMLViewerView(paramsBlockHtml) as unknown as CustomElement;
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(htmlViewer.getElementCreator());
        }
    }
}
