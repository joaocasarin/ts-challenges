import fibonacciNoRecursion, {
    fibonacciNoRecursionForArray
} from '@src/fibonacci';

describe('Fibonacci', () => {
    test('should return 0 for 0', () => {
        expect(fibonacciNoRecursion(0)).toBe(0);
    });

    test('should return 1 for 1', () => {
        expect(fibonacciNoRecursion(1)).toBe(1);
    });

    test('should return 1 for 2', () => {
        expect(fibonacciNoRecursion(2)).toBe(1);
    });

    test('should return 2 for 3', () => {
        expect(fibonacciNoRecursion(3)).toBe(2);
    });

    test('should return 8 for 6', () => {
        expect(fibonacciNoRecursion(6)).toBe(8);
    });
});

describe('Fibonacci for array', () => {
    test('should return [3,5,8] for [4,5,6]', () => {
        expect(fibonacciNoRecursionForArray([4, 5, 6])).toEqual([3, 5, 8]);
    });

    test('should return [3,5,8] for [4,5,6,7,8,9]', () => {
        expect(fibonacciNoRecursionForArray([4, 5, 6, 7, 8, 9])).toEqual([
            3, 5, 8, 13, 21, 34
        ]);
    });

    test('should return [] for []', () => {
        expect(fibonacciNoRecursionForArray([])).toEqual([]);
    });

    test('should return [13,3,34] for [7,4,9]', () => {
        expect(fibonacciNoRecursionForArray([7, 4, 9])).toEqual([13, 3, 34]);
    });
});
