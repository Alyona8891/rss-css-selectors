import './htmlViewer.css';
import { ParamsBlockHtmlElem, ParamsElementCreator } from '../../../../../types/types';
import View from '../../../view';
import 'highlight.js/styles/kimbie-dark.css';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import createBlock from '../../../../functions/createBlock';
hljs.registerLanguage('xml', xml);

export default class HTMLViewerView extends View {
    myparamsBlockHtml: ParamsBlockHtmlElem[];
    constructor(paramsBlockHtml: ParamsBlockHtmlElem[]) {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['table-html'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.myparamsBlockHtml = paramsBlockHtml;
        this.configView();
    }

    configView(): void {
        createBlock(this.elementCreator?.getCreatedElement() as HTMLElement, this.myparamsBlockHtml);
    }
}
