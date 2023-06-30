import './htmlViewer.css';
import { ParamsBlockHtmlElem, ParamsElementCreator } from '../../../../../types/types';
import ElementCreator from '../../../../unit/elementCreator';
import View from '../../../view';

export default class HTMLViewerView extends View {
    myparamsBlockHtml: ParamsBlockHtmlElem[];
    constructor(paramsBlockHtml: ParamsBlockHtmlElem[]) {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['markup'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.myparamsBlockHtml = paramsBlockHtml;
        this.configView();
    }

    configView(): void {
        const paramsTableSurf: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['black'],
            textContent: '',
            callback: {
                mouseenter: (event: Event): void => {
                    const targ = event.target;
                    console.log(targ instanceof HTMLElement);
                    if (targ instanceof HTMLElement) {
                        const helper = document.querySelector('.helper');
                        helper?.classList.add('visib');
                    }
                },
            },
        };
        const blockTableSurf = new ElementCreator(paramsTableSurf);

        if (this.elementCreator) {
            this.elementCreator.addInnerElement(blockTableSurf);
        }
        blockTableSurf.getCreatedElement()?.append('<div class="table">');
        this.myparamsBlockHtml.forEach((el) =>
            Object.entries(el).forEach(([key, value]) => {
                const elem = document.createElement('div');
                if (typeof value === 'string') {
                    elem.append(value);
                    blockTableSurf.getCreatedElement()?.append(elem);
                }
            })
        );
        blockTableSurf.getCreatedElement()?.append('</div>');

        /*my.forEach((el: ParamsBlockPlate) => {
            const obj = {
                tag: el.tag,
                tagClases: [el.class],
                textContent: '',
                callback: null,
            };
            const blockTableinner = new ElementCreator(obj);
            if (this.elementCreator) {
                this.elementCreator.addInnerElement(blockTableinner);
            }
        });*/
    }
}
