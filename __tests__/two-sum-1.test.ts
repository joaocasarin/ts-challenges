import twoSum, { twoSum2 } from '@src/two-sum-1';

describe('Two Sum O(n)', () => {
    test('should return [0, 1]', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('should return [1, 2]', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });
});

describe('Two Sum O(n^2)', () => {
    test('should return [0, 1]', () => {
        expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('should return [1, 2]', () => {
        expect(twoSum2([3, 2, 4], 6)).toEqual([1, 2]);
    });
});
