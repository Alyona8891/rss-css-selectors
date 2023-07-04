import arrPlates from '../../data/arrPlates';

function addEventListHtmlLines(): void {
    const els = document.querySelectorAll('.html-line');
    els.forEach((el, i) => {
        if (i !== 0) {
            el.addEventListener('mouseover', (e: Event) => {
                const targ = e.target;
                e.stopPropagation();
                if (el instanceof HTMLElement) {
                    el.style.background = 'white';
                }
                const h = document.querySelector('.helper');
                if (targ instanceof HTMLDivElement && h instanceof HTMLElement) {
                    const arrT = Array.from(els);
                    const indexTargetEl = arrT.indexOf(targ);
                    arrPlates[indexTargetEl - 1].classList.add('hovered');
                    h.innerText = targ.innerText;
                    h.classList.add('visib');
                    const g = arrPlates[indexTargetEl - 1] as HTMLElement;
                    const offsetLeft = g.offsetLeft;
                    h.style?.setProperty('left', `${offsetLeft}px`);
                }
                if (targ instanceof HTMLSpanElement && h instanceof HTMLElement) {
                    const arrT = Array.from(els);
                    if (targ.closest('div')) {
                        const indexTargetEl = arrT.indexOf(targ.closest('div')!);
                        arrPlates[indexTargetEl - 1].classList.add('hovered');
                        h.innerText = targ.closest('div')!.innerText;
                        h.classList.add('visib');
                        const g = arrPlates[indexTargetEl - 1] as HTMLElement;
                        const offsetLeft = g.offsetLeft;
                        h.style?.setProperty('left', `${offsetLeft}px`);
                    }
                }
            });
        }
    });
    els.forEach((el, i) => {
        if (i !== 0) {
            el.addEventListener('mouseout', (e: Event) => {
                if (el instanceof HTMLElement) {
                    el.style.removeProperty('background');
                }
                const targ = e.target;
                const h = document.querySelector('.helper');
                if (targ instanceof HTMLDivElement && h instanceof HTMLElement) {
                    const arrT = Array.from(els);
                    const indexTargetEl = arrT.indexOf(targ);
                    arrPlates[indexTargetEl - 1].classList.remove('hovered');
                    h.classList.remove('visib');
                }
                if (targ instanceof HTMLSpanElement && h instanceof HTMLElement) {
                    const arrT = Array.from(els);
                    if (targ.closest('div')) {
                        const indexTargetEl = arrT.indexOf(targ.closest('div')!);
                        arrPlates[indexTargetEl - 1].classList.remove('hovered');
                    }
                    h.classList.remove('visib');
                }
            });
        }
    });
}
export default addEventListHtmlLines;
