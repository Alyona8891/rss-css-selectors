import detectCurrentLevel from '../components/functions/detectCurrentLevel';

describe('detectCurrentLevel', () => {
    test('should change localStorage.alyonaCurrentLevel', () => {
        localStorage.setItem('alyonaCurrentLevel', '1');
        detectCurrentLevel({
            1: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: true,
            },
            2: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            3: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            4: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            5: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            6: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            7: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            8: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            9: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            10: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
        });

        expect(localStorage.getItem('alyonaCurrentLevel')).toBe('1');
        detectCurrentLevel({
            1: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            2: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            3: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            4: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: true,
            },
            5: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            6: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            7: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            8: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            9: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
            10: {
                isFinished: false,
                isFinishedWithHelp: false,
                isCurrentLevel: false,
            },
        });

        expect(localStorage.getItem('alyonaCurrentLevel')).toBe('4');
    });
});
