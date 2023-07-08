import './htmlBlock.css';
import { ParametersHtmlLines, ParametersElementCreator } from '../../../../types/types';
import ElementCreator from '../../../unit/elementCreator';
import View from '../../view';
import HTMLViewerView from './htmlViewerView/htmlViewerView';

interface CustomElement extends HTMLElement {
    getElementCreator(): HTMLElement;
    addInnerElement(element: Element | ElementCreator | undefined): Element;
}

export default class HtmlBlockView extends View {
    valueInput: string;
    parametersHtmlLines: ParametersHtmlLines[];
    constructor(parametersHtmlLines: ParametersHtmlLines[]) {
        const parameters: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['htmlBlockContainer'],
            textContent: '',
            callback: null,
        };
        super(parameters);
        this.valueInput = '';
        this.parametersHtmlLines = parametersHtmlLines;
        this.configView(this.parametersHtmlLines);
    }

    configView(parametersHtmlLines: ParametersHtmlLines[]): void {
        const parametersEditorHeaderContainer: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['editor-header_container'],
            textContent: '',
            callback: null,
        };
        const editorHeaderContainerElement = new ElementCreator(parametersEditorHeaderContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(editorHeaderContainerElement);
        }
        const parametersFileNameContainer: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['file-name'],
            textContent: 'HTML Viewer',
            callback: null,
        };
        const editorHeaderFileName = new ElementCreator(parametersFileNameContainer);
        editorHeaderContainerElement.addInnerElement(editorHeaderFileName);
        const parametersFileElement: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['file-window'],
            textContent: 'table.html',
            callback: null,
        };
        const editorHeaderFileElement = new ElementCreator(parametersFileElement);
        editorHeaderContainerElement.addInnerElement(editorHeaderFileElement);
        const parametersLineNumbersElement: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['line-numbers-html'],
            textContent: '',
            callback: null,
        };
        const lineNumbersElement = new ElementCreator(parametersLineNumbersElement);
        const createdLineNumbersElement = lineNumbersElement.getCreatedElement() as HTMLElement;
        createdLineNumbersElement.innerHTML = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10';
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(createdLineNumbersElement);
        }
        const htmlViewer = new HTMLViewerView(parametersHtmlLines) as unknown as CustomElement;
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(htmlViewer.getElementCreator());
        }
    }
}
