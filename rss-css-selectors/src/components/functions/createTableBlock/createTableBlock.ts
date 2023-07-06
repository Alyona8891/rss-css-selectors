import { ParamsBlockPlate } from '../../../types/types';
import { createElement } from './createElement';

function createTableBlock(
    container: HTMLElement,
    parametersElements: ParamsBlockPlate[],
    arrayElements: HTMLElement[] | Element[] | undefined
): void {
    parametersElements.forEach((el) => {
        if (el.child) {
            const createdElement = createElement(el, container, arrayElements);
            createTableBlock(createdElement, el.child, arrayElements);
        } else {
            createElement(el, container, arrayElements);
        }
    });
}

export default createTableBlock;
