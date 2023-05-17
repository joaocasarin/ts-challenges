import searchRange from '@src/find-first-and-last-pos-element-sorted-array-34';

describe('Find First and Last Position of Element in Sorted Array', () => {
    test('should return [3,4] for nums = [5,7,7,8,8,10], target = 8', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    });

    test('should return [-1,-1] for nums = [5,7,7,8,8,10], target = 6', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    });

    test('should return [-1,-1] for nums = [], target = 0', () => {
        expect(searchRange([], 0)).toEqual([-1, -1]);
    });
});
