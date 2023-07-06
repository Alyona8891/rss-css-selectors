import hljs from 'highlight.js/lib/core';
import { ParametersHtmlLines } from '../../types/types';

function createBlock(container: HTMLElement, parametersHtmlLines: ParametersHtmlLines[]): void {
    const arrElements: HTMLElement[] = [];
    parametersHtmlLines.forEach((el) => {
        const divElement = document.createElement('div');
        divElement.classList.add('html-line');
        divElement.style.paddingLeft = '20px';
        if (typeof el.innerElement !== 'string') {
            createBlock(divElement, el.innerElement);
            if (el.selector) {
                divElement.insertAdjacentHTML(
                    'afterbegin',
                    hljs.highlight(`<${el.tag} ${el.selector}>`, {
                        language: 'xml',
                    }).value
                );
            } else {
                divElement.insertAdjacentHTML(
                    'afterbegin',
                    hljs.highlight(`<${el.tag}>`, {
                        language: 'xml',
                    }).value
                );
            }
            divElement.insertAdjacentHTML(
                'beforeend',
                hljs.highlight(`</${el.tag}>`, {
                    language: 'xml',
                }).value
            );
            const divElementOuterHtml = divElement.outerHTML as unknown as HTMLElement;
            arrElements.push(divElementOuterHtml);
        } else {
            if (el.selector) {
                divElement.innerHTML = hljs.highlight(`<${el.tag} ${el.selector} />`, {
                    language: 'xml',
                }).value;
            } else {
                divElement.innerHTML = hljs.highlight(`<${el.tag} />`, {
                    language: 'xml',
                }).value;
            }
            const divElementOuterHtml = divElement.outerHTML as unknown as HTMLElement;
            arrElements.push(divElementOuterHtml);
        }
    });
    container.innerHTML = arrElements.join('');
}
export default createBlock;
