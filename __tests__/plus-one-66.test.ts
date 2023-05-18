import plusOne from '@src/plus-one-66';

describe('plusOne', () => {
    test('should return [1,2,4] for digits = [1,2,3]', () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    });

    test('should return [4,3,2,2] for digits = [4,3,2,1]', () => {
        expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    });

    test('should return [1] for digits = [0]', () => {
        expect(plusOne([0])).toEqual([1]);
    });

    test('should return [1,0] for digits = [9]', () => {
        expect(plusOne([9])).toEqual([1, 0]);
    });
});
