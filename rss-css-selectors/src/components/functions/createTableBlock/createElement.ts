import { ParamsBlockPlate } from '../../../types/types';
import GameElementCreator from '../../unit/gameElementCreator';
import { handleElementMouseout, handleElementMouseover } from './handleElementMouseMovement';

export function createElement(
    el: ParamsBlockPlate,
    container: HTMLElement,
    arrayElements: HTMLElement[] | Element[] | undefined
): HTMLElement {
    const parametersCreatingElement = {
        tag: el.tag,
        tagClasses: el.class,
        textContent: '',
        callback: {
            mouseover: handleElementMouseover,
            mouseout: handleElementMouseout,
        },
    };
    const instanceGameElementCreator = new GameElementCreator(parametersCreatingElement);
    const сreatedElement = instanceGameElementCreator.getCreatedElement() as HTMLElement;
    if (el.id) {
        сreatedElement.id = el.id;
    }
    if (сreatedElement instanceof HTMLElement) {
        container.append(сreatedElement);
        arrayElements?.push(сreatedElement);
    }
    return сreatedElement;
}
