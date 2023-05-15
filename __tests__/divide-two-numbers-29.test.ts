import divide from '@src/divide-two-numbers-29';

describe('Divide Two Numbers', () => {
    test('should return 3', () => {
        expect(divide(10, 3)).toEqual(3);
    });

    test('should return -2', () => {
        expect(divide(7, -3)).toEqual(-2);
    });

    test('should return 0', () => {
        expect(divide(0, 1)).toEqual(0);
    });

    test('should return 1', () => {
        expect(divide(1, 1)).toEqual(1);
    });

    test('should return 2147483647', () => {
        expect(divide(-2147483648, -1)).toEqual(2147483647);
    });
});
