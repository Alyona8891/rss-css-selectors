import { State } from '../../types/types';

function detectCurrentLevel(state: State): void {
    let indexCurrentLevel = 0;
    Object.entries(state).forEach(([key, value], i) => {
        if (value.isCurrentLevel) {
            indexCurrentLevel = i;
        }
    });
    localStorage.alyonaCurrentLevel = indexCurrentLevel + 1;
}
export default detectCurrentLevel;
