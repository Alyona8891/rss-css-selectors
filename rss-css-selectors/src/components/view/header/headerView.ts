import './header.css';
import { ParametersElementCreator } from '../../../types/types';
import View from '../view';

export default class HeaderView extends View {
    parameters: ParametersElementCreator;
    constructor() {
        const parameters: ParametersElementCreator = {
            tag: 'header',
            tagClasses: ['header'],
            textContent: '',
            callback: null,
        };
        super(parameters);
        this.parameters = parameters;
    }
}
