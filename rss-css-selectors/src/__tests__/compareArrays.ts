import compareArrays from '../components/functions/compareArrays';

describe('compareArrays', () => {
    test('should compare two arrays', () => {
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3];
        expect(compareArrays(array1, array2)).toBe(true);

        const array3 = [1, 2, 3];
        const array4 = [1, 3, 2];
        expect(compareArrays(array3, array4)).toBe(false);
    });
});
