import './main.css'
import { ParamsElementCreator } from '../../../types/types';
import View from '../view';

export default class MainView extends View {

    constructor() {
        const params: ParamsElementCreator = {
            tag: 'main',
            tagClases: ['main'],
            textContent: 'main',
            callback: null,
        };
        super(params);
    }
}
