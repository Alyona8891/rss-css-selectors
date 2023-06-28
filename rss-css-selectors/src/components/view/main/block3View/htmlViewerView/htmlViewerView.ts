import './htmlViewer.css';
import { ParamsElementCreator } from '../../../../../types/types';
import ElementCreator from '../../../../unit/elementCreator';
import View from '../../../view';

export default class HTMLViewerView extends View {
    constructor() {
        const params: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['markup'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.configView();
    }

    configView(): void {
        const paramsTableSurf: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['black'],
            textContent: '',
            callback: null,
        };
        const blockTableSurf = new ElementCreator(paramsTableSurf);

        if (this.elementCreator) {
            this.elementCreator.addInnerElement(blockTableSurf);
        }
        blockTableSurf.getCreatedElement()?.append('<div class="table">');
        const el = document.createElement('div');
        el.append('<plate />');
        blockTableSurf.getCreatedElement()?.append(el);
        const el2 = document.createElement('div');
        el2.append('<plate />');
        blockTableSurf.getCreatedElement()?.append(el2);

        //blockTableSurf.getCreatedElement()?.append(document.createElement('div')?.append('<plate />'));
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
