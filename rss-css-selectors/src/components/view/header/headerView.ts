import './header.css';
import { ParamsElementCreator } from '../../../types/types';
import View from '../view';


export default class HeaderView extends View {

    constructor() {
        const params: ParamsElementCreator = {
            tag: 'header',
            tagClases: ['header'],
            textContent: 'headertt',
            callback: null,
        };
        super(params);
    }
}
