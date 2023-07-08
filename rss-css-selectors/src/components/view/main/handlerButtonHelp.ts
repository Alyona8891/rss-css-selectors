import hljs from 'highlight.js/lib/core';
import initialState from '../../../data/state';
import App from '../../app/app';
import screenplays from '../../../data/screenplays';

const BUTTON_HELP_TEXT = 'Level is passed!';

function handlerButtonHelp(): void {
    const inputElement = document.querySelector('input') as HTMLInputElement;
    inputElement.value = screenplays[`level${localStorage.alyonaCurrentLevel}`].help;
    const pseudoInputElement = document.querySelector('.pseudo-input') as HTMLElement;
    pseudoInputElement.innerText = screenplays[`level${localStorage.alyonaCurrentLevel}`].help;
    hljs.highlightElement(pseudoInputElement);
    pseudoInputElement.style.overflow = 'hidden';
    pseudoInputElement.style.width = `${pseudoInputElement.innerText.length}ch`;
    pseudoInputElement.style.animation = `animated_text 0.3s steps(${pseudoInputElement.innerText.length},end) 1s 1 normal both`;
    const localStageAlyonaState = localStorage.getItem('alyonaState');
    if (localStageAlyonaState) {
        let parsedLocalStageAlyonaState = JSON.parse(localStageAlyonaState);
        parsedLocalStageAlyonaState[`${localStorage.alyonaCurrentLevel}`].isFinished = true;
        parsedLocalStageAlyonaState[`${localStorage.alyonaCurrentLevel}`].isFinishedWithHelp = true;
        parsedLocalStageAlyonaState[`${localStorage.alyonaCurrentLevel}`].isCurrentLevel = false;
        if (parsedLocalStageAlyonaState[`${+localStorage.alyonaCurrentLevel + 1}`]) {
            parsedLocalStageAlyonaState[`${+localStorage.alyonaCurrentLevel + 1}`].isCurrentLevel = true;
        } else {
            parsedLocalStageAlyonaState = initialState;
        }
        localStorage.setItem('alyonaState', JSON.stringify(parsedLocalStageAlyonaState));
        pseudoInputElement.addEventListener('animationend', () => {
            const strobeElements = document.querySelectorAll('.strobe');
            strobeElements.forEach((el) => el.classList.add('winner'));
            const elementClassHelper = document.querySelector('.helper') as HTMLElement;
            elementClassHelper?.classList.add('visib');
            elementClassHelper.innerText = BUTTON_HELP_TEXT;
            elementClassHelper.style.left = '25%';
            strobeElements.forEach((el) =>
                el.addEventListener('animationend', () => {
                    const bodyElement = document.querySelector('body');
                    while (bodyElement?.firstElementChild) {
                        bodyElement.firstElementChild.remove();
                    }
                    new App();
                })
            );
        });
    }
}
export default handlerButtonHelp;
