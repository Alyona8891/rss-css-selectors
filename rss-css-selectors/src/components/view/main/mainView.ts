import './main.css';
import { ParametersElementCreator, Screenplay, State } from '../../../types/types';
import View from '../view';
import ElementCreator from '../../unit/elementCreator';
import GameBlockView from './gameBlock/GameBlockView';
import CssEditorView from './cssEditor/cssEditorView';
import HtmlBlockView from './htmlBlock/htmlBlockView';
import LevelsBlockView from './levelsBlock/levelsBlockView';
import screenplays from '../../../data/screenplays';
import handlerButtonHelp from './handlerButtonHelp';
import detectCurrentLevel from '../../functions/detectCurrentLevel';

const ButtonHelpTextContent = 'I can help:)';
export default class MainView extends View {
    state: State;
    constructor(state: State) {
        const parameters: ParametersElementCreator = {
            tag: 'main',
            tagClasses: ['main'],
            textContent: '',
            callback: null,
        };
        super(parameters);
        this.state = state;
        this.checkState();
        detectCurrentLevel(this.state);
        this.configView(screenplays);
    }

    configView(screenplays: Screenplay): void {
        const parametersTitle: ParametersElementCreator = {
            tag: 'h1',
            tagClasses: ['title'],
            textContent: screenplays[`level${localStorage.alyonaCurrentLevel}`].title,
            callback: null,
        };
        const titleElement = new ElementCreator(parametersTitle);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(titleElement);
        }
        const parametersButtonHelpContainer: ParametersElementCreator = {
            tag: 'div',
            tagClasses: ['container'],
            textContent: '',
            callback: null,
        };
        const buttonHelpContainer = new ElementCreator(parametersButtonHelpContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(buttonHelpContainer);
        }
        const parametersButtonHelp: ParametersElementCreator = {
            tag: 'button',
            tagClasses: ['buttonHelp'],
            textContent: ButtonHelpTextContent,
            callback: {
                click: handlerButtonHelp,
            },
        };
        const buttonHelpElement = new ElementCreator(parametersButtonHelp);
        if (buttonHelpContainer) {
            buttonHelpContainer.addInnerElement(buttonHelpElement);
        }
        const levelsBlockView: View = new LevelsBlockView(this.state);
        this.elementCreator?.addInnerElement(levelsBlockView?.getElementCreator());
        const gameBlockView: View = new GameBlockView(
            screenplays[`level${localStorage.alyonaCurrentLevel}`].parametersElements
        );
        this.elementCreator?.addInnerElement(gameBlockView?.getElementCreator());
        const cssEditorView: View = new CssEditorView();
        this.elementCreator?.addInnerElement(cssEditorView?.getElementCreator());
        const htmlBlockView: View = new HtmlBlockView(
            screenplays[`level${localStorage.alyonaCurrentLevel}`].parametersHtmlLines
        );
        this.elementCreator?.addInnerElement(htmlBlockView?.getElementCreator());
    }

    checkState(): void {
        const localAlyonaState = localStorage.getItem('alyonaState');
        if (localAlyonaState) {
            this.state = JSON.parse(localAlyonaState);
        }
    }
}
