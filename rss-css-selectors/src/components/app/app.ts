import state from '../../data/state';
import { State } from '../../types/types';
import FooterView from '../view/footer/footerView';
import HeaderView from '../view/header/headerView';
import MainView from '../view/main/mainView';

interface CustomElement extends HTMLElement {
    getElementCreator(): Element;
}

export default class App {
    state: State;
    constructor() {
        this.state = state;
        this.checkState();
        this.createView();
    }

    createView(): void {
        const headerView = new HeaderView() as unknown as CustomElement;
        const footerView = new FooterView() as unknown as CustomElement;
        const mainView = new MainView(state) as unknown as CustomElement;
        document.body.append(
            headerView.getElementCreator(),
            mainView.getElementCreator(),
            footerView.getElementCreator()
        );
    }

    checkState(): void {
        const localAlyonaState = localStorage.getItem('alyonaState');
        if (localAlyonaState) {
            this.state = JSON.parse(localAlyonaState);
        }
    }
}
