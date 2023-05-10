import threeSumClosest from '@src/3sum-closest-16';

describe('3sum-closest-16.ts', () => {
    test('should return 2', () => {
        expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
    });

    test('should return 0', () => {
        expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
    });
});
