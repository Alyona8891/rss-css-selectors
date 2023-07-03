import './main.css';
import { ParamsElementCreator, Screenplay, State } from '../../../types/types';
import View from '../view';
import ElementCreator from '../../unit/elementCreator';
import Block1View from './block1View/block1View';
import Block2View from './block2View/block2View';
import Block3View from './block3View/block3View';
import Block4View from './block4View/block4View';
import screenplays from '../../../data/screenplays';
import hljs from 'highlight.js/lib/core';

interface CustomElement extends HTMLElement {
    getElementCreator(): HTMLElement;
    addInnerElement(element: Element | ElementCreator | undefined): Element;
    arr: HTMLElement[] | Element[] | undefined;
}

export default class MainView extends View {
    currentState: State;
    constructor(state: State) {
        const params: ParamsElementCreator = {
            tag: 'main',
            tagClases: ['main'],
            textContent: '',
            callback: null,
        };
        super(params);
        this.currentState = state;
        this.checkState();
        this.detectCurrentLevel(this.currentState);
        this.configView(screenplays);
    }

    configView(screenplays: Screenplay): void {
        const paramsTitle: ParamsElementCreator = {
            tag: 'h1',
            tagClases: ['title'],
            textContent: screenplays[`level${localStorage.alyonaCurentValue}`].title,
            callback: null,
        };
        const title = new ElementCreator(paramsTitle);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(title);
        }
        const paramsHelpButtonContainer: ParamsElementCreator = {
            tag: 'div',
            tagClases: ['container'],
            textContent: '',
            callback: null,
        };
        const blockHelpContainer = new ElementCreator(paramsHelpButtonContainer);
        if (this.elementCreator) {
            this.elementCreator.addInnerElement(blockHelpContainer);
        }
        const paramsHelpButton: ParamsElementCreator = {
            tag: 'button',
            tagClases: ['buttonHelp'],
            textContent: 'button',
            callback: {
                click: (): void => {
                    const input = document.querySelector('input') as HTMLInputElement;
                    input.value = '.plate#green';
                    const div = document.querySelector('.pseudo-input') as HTMLElement;
                    div.innerText = '.plate#green';
                    hljs.highlightElement(div);
                    div.style.width = '0px';
                    div.style.animation = `animated-text 10s steps(30,end) 1s 1 normal both`;
                },
            },
        };
        const buttonHelp = new ElementCreator(paramsHelpButton);
        if (blockHelpContainer) {
            blockHelpContainer.addInnerElement(buttonHelp);
        }
        const block4 = new Block4View(this.currentState) as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block4?.getElementCreator());
        const block1 = new Block1View(
            screenplays[`level${localStorage.alyonaCurentValue}`].paramsBlockPlates
        ) as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block1?.getElementCreator());
        const block2 = new Block2View() as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block2?.getElementCreator());
        const block3 = new Block3View(
            screenplays[`level${localStorage.alyonaCurentValue}`].paramsBlockHtml
        ) as unknown as CustomElement;
        this.elementCreator?.addInnerElement(block3?.getElementCreator());
    }

    detectCurrentLevel(state: State): void {
        let indexCurEl = 0;
        Object.entries(state).forEach(([key, value], i) => {
            if (value.isCurrentTask === true) {
                indexCurEl = i;
            }
        });
        localStorage.alyonaCurentValue = indexCurEl + 1;
    }

    checkState(): void {
        const localAlyonaState = localStorage.getItem('alyonaState');
        if (localAlyonaState) {
            this.currentState = JSON.parse(localAlyonaState);
        }
    }
}
