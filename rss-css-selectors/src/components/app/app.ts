import initialState from '../../data/state';
import { State } from '../../types/types';
import createHandlerHtmlLines from '../functions/createHandlerHtmlLines';
import FooterView from '../view/footer/footerView';
import HeaderView from '../view/header/headerView';
import MainView from '../view/main/mainView';

export default class App {
    state: State;
    constructor() {
        this.state = initialState;
        this.checkState();
        this.createView();
        createHandlerHtmlLines();
    }

    createView(): void {
        const headerView: HeaderView = new HeaderView();
        const footerView: FooterView = new FooterView();
        const mainView: MainView = new MainView(this.state);
        const createdHeaderView = headerView.getElementCreator();
        const createdMainView = mainView.getElementCreator();
        const createdFooterView = footerView.getElementCreator();
        if (createdHeaderView && createdMainView && createdFooterView) {
            document.body.append(createdHeaderView, createdMainView, createdFooterView);
        }
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
