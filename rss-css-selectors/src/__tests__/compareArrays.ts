import compareArrays from '../components/functions/compareArrays';

describe('compareArrays', () => {
    test('should compare two arrays', () => {
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3];

        expect(compareArrays(array1, array2)).toBe(true);
    });

    test('should compare two arrays', () => {
        const array1 = [1, 2, 3];
        const array2 = [1, 3, 2];

        expect(compareArrays(array1, array2)).toBe(false);
    });
});
