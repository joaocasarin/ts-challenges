import mySqrt from '@src/sqrt-68';

describe('mySqrt', () => {
    test('should return 2 for 4', () => {
        expect(mySqrt(4)).toBe(2);
    });

    test('should return 2 for 8', () => {
        expect(mySqrt(8)).toBe(2);
    });

    test('should be 1 for 1', () => {
        expect(mySqrt(1)).toBe(1);
    });
});
