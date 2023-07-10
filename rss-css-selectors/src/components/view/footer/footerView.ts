import './footer.css';
import { ParametersElementCreator } from '../../../types/types';
import View from '../view';
import ElementCreator from '../../unit/elementCreator';
import LinkView from './link/linkView';
import ImageView from './image/imageView';

const ATTRIBUTES = {
    githablink: [
        {
            name: 'href',
            value: 'https://github.com/Alyona8891',
        },
        {
            name: 'target',
            value: '_blank',
        },
    ],
    rsschoollink: [
        {
            name: 'href',
            value: 'https://rs.school/js/',
        },
        {
            name: 'target',
            value: '_blank',
        },
    ],
    logoimage: [
        {
            name: 'src',
            value: 'https://rs.school/images/rs_school_js.svg',
        },
        {
            name: 'alt',
            value: 'rs logo',
        },
    ],
};

export default class FooterView extends View {
    parameters: ParametersElementCreator;
    constructor() {
        const parameters: ParametersElementCreator = {
            tag: 'footer',
            tagClasses: ['footer'],
            textContent: '',
            callback: null,
        };
        super(parameters);
        this.parameters = parameters;
        this.configView();
    }

    configView(): void {
        const parametersGithubLinkBlock: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['gh-profile'],
            textContent: '',
            callback: null,
        };
        const githubLinkBlockElement = new ElementCreator(parametersGithubLinkBlock);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(githubLinkBlockElement);
        }
        const githubLinkElement = new LinkView('Alyona Shupenyova', ATTRIBUTES.githablink);
        githubLinkBlockElement.addInnerElement(githubLinkElement.getElementCreator());
        const parametersYearBlockElement: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['year'],
            textContent: '2023',
            callback: null,
        };
        const yearBlockElement = new ElementCreator(parametersYearBlockElement);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(yearBlockElement);
        }
        const parametersRsschoolLinkBlock: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['rs-link'],
            textContent: '',
            callback: null,
        };
        const rsschoolLinkBlockElement = new ElementCreator(parametersRsschoolLinkBlock);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(rsschoolLinkBlockElement);
        }
        const rsschoolLinkElement = new LinkView('', ATTRIBUTES.rsschoollink);
        rsschoolLinkBlockElement.addInnerElement(rsschoolLinkElement.getElementCreator());
        const logoImageElement: View = new ImageView(ATTRIBUTES.logoimage);
        const createdLogoImageElement = logoImageElement.getElementCreator();
        if (createdLogoImageElement) {
            rsschoolLinkElement.getElementCreator()?.append(createdLogoImageElement);
        }
    }
}
