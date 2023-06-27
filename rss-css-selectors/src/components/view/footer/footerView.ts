import './footer.css';
import { ParamsElementCreator } from '../../../types/types';
import View from '../view';
import ElementCreator from '../../unit/elementCreator';
import LinkView from './link/linkView';
import ImageView from './image/imageView';
interface CustomElement extends HTMLElement {
    getElementCreator(): Element;
}
const attrributesNames = [
    [
        {
            name: 'href',
            value: 'https://github.com/Alyona8891',
        },
        {
            name: 'target',
            value: '_blank',
        },
    ],
    [
        {
            name: 'href',
            value: 'https://rs.school/js/',
        },
        {
            name: 'target',
            value: '_blank',
        },
    ],
    [
        {
            name: 'src',
            value: 'https://rs.school/images/rs_school_js.svg',
        },
        {
            name: 'alt',
            value: 'rs logo',
        },
    ],
];

export default class FooterView extends View {
    constructor() {
        const params: ParamsElementCreator = {
            tag: 'footer',
            tagClases: ['footer'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.configView();
    }

    configView(): void {
        const paramsGh: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['gh-profile'],
            textContent: '',
            callback: null,
        };
        const ghPrLinkCreator = new ElementCreator(paramsGh);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(ghPrLinkCreator);
        }
        const ghPrLinkElen = new LinkView('Alyona Shupenyova', attrributesNames[0]);
        ghPrLinkCreator.addInnerElement(ghPrLinkElen.getElementCreator());
        const paramsYear: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['year'],
            textContent: '2023',
            callback: null,
        };
        const yearCreator = new ElementCreator(paramsYear);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(yearCreator);
        }
        const paramsRsLint: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['rs-link'],
            textContent: '',
            callback: null,
        };
        const rsLinkCreator = new ElementCreator(paramsRsLint);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(rsLinkCreator);
        }
        const rsLinkElenm = new LinkView('', attrributesNames[1]);
        rsLinkCreator.addInnerElement(rsLinkElenm.getElementCreator());
        const logoImage = new ImageView(attrributesNames[2]) as unknown as CustomElement;
        const j = logoImage.getElementCreator();
        if (j) {
            rsLinkElenm.getElementCreator()?.append(logoImage.getElementCreator());
        }
    }
}
