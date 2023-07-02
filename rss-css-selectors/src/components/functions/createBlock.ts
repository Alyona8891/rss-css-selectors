import hljs from 'highlight.js/lib/core';
import { ParamsBlockHtmlElem } from '../../types/types';

function createBlock(container: HTMLElement, data: ParamsBlockHtmlElem[]): void {
    const arr: HTMLElement[] = [];
    data.forEach((e) => {
        const div = document.createElement('div');
        div.style.paddingLeft = '20px';

        if (typeof e.inner !== 'string') {
            createBlock(div, e.inner);
            if (e.selector) {
                div.insertAdjacentHTML(
                    'afterbegin',
                    hljs.highlight(`<${e.tag} ${e.selector}>`, {
                        language: 'xml',
                    }).value
                );
            } else {
                div.insertAdjacentHTML(
                    'afterbegin',
                    hljs.highlight(`<${e.tag}>`, {
                        language: 'xml',
                    }).value
                );
            }
            div.insertAdjacentHTML(
                'beforeend',
                hljs.highlight(`</${e.tag}>`, {
                    language: 'xml',
                }).value
            );
            const j = div.outerHTML as unknown as HTMLElement;
            arr.push(j);
        } else {
            div.innerHTML = hljs.highlight(`<${e.tag} />`, {
                language: 'xml',
            }).value;
            const j = div.outerHTML as unknown as HTMLElement;
            arr.push(j);
        }
        div.addEventListener('click', () => {
            console.log('Событие click на div');
        });
    });
    container.innerHTML = arr.join('');
}
export default createBlock;
