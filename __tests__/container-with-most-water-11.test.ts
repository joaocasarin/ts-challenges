import maxArea from '@src/container-with-most-water-11';

describe('Container With Most Water', () => {
    test('should return 49', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });

    test('should return 1', () => {
        expect(maxArea([1, 1])).toBe(1);
    });

    test('should return 16', () => {
        expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
    });

    test('should return 2', () => {
        expect(maxArea([1, 2, 1])).toBe(2);
    });
});
