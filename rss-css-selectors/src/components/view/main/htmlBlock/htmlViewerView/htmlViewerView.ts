import './htmlViewer.css';
import { ParametersHtmlLines, ParametersElementCreator } from '../../../../../types/types';
import View from '../../../view';
import 'highlight.js/styles/kimbie-dark.css';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import createBlock from '../../../../functions/createBlock';
hljs.registerLanguage('xml', xml);

export default class HTMLViewerView extends View {
    parametersBlockHtml: ParametersHtmlLines[];
    constructor(parametersBlockHtml: ParametersHtmlLines[]) {
        const parameters: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['table-html'],
            textContent: '',
            callback: null,
        };
        super(parameters);
        this.parametersBlockHtml = parametersBlockHtml;
        this.configView();
    }

    configView(): void {
        createBlock(this.elementCreator?.getCreatedElement() as HTMLElement, this.parametersBlockHtml);
    }
}
