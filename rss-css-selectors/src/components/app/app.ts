import initialState from '../../data/state';
import { State } from '../../types/types';
import createHandlerHtmlLines from '../functions/createHandlerHtmlLines';
import FooterView from '../view/footer/footerView';
import HeaderView from '../view/header/headerView';
import MainView from '../view/main/mainView';

interface CustomElement extends HTMLElement {
    getElementCreator(): Element;
}

export default class App {
    state: State;
    constructor() {
        this.state = initialState;
        this.checkState();
        this.createView();
        createHandlerHtmlLines();
    }

    createView(): void {
        const headerView = new HeaderView() as unknown as CustomElement;
        const footerView = new FooterView() as unknown as CustomElement;
        const mainView = new MainView(this.state) as unknown as CustomElement;
        document.body.append(
            headerView.getElementCreator(),
            mainView.getElementCreator(),
            footerView.getElementCreator()
        );
    }

    checkState(): void {
        const localStorageAlyonaState = localStorage.getItem('alyonaState');
        if (localStorageAlyonaState) {
            this.state = JSON.parse(localStorageAlyonaState);
        } else {
            localStorage.setItem('alyonaState', JSON.stringify(this.state));
        }
    }
}
