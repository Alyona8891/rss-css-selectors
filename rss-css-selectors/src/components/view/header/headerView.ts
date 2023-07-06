import './header.css';
import { ParametersElementCreator } from '../../../types/types';
import View from '../view';

export default class HeaderView extends View {
    constructor() {
        const parameters: ParametersElementCreator = {
            tag: 'header',
            tagClases: ['header'],
            textContent: '',
            callback: null,
        };
        super(parameters);
    }
}
