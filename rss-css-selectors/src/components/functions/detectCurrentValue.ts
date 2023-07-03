import { State } from '../../types/types';

function detectCurrentLevel(state: State): void {
    let indexCurEl = 0;
    Object.entries(state).forEach(([key, value], i) => {
        if (value.isCurrentTask === true) {
            indexCurEl = i;
        }
    });
    localStorage.alyonaCurentValue = indexCurEl + 1;
}
export default detectCurrentLevel;
