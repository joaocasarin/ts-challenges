import searchInsert from '@src/search-insert-position-35';

describe('Search Insert Position', () => {
    test('should return 2 for nums = [1,3,5,6], target = 5', () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    });

    test('should return 1 for nums = [1,3,5,6], target = 2', () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    });

    test('should return 4 for nums = [1,3,5,6], target = 7', () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    });

    test('should return 1 for nums = [1,3], target = 2', () => {
        expect(searchInsert([1, 3], 2)).toBe(1);
    });

    test('should return 0 for nums = [2], target = 1', () => {
        expect(searchInsert([2], 1)).toBe(0);
    });

    test('should return 1 for nums = [2], target = 3', () => {
        expect(searchInsert([2], 3)).toBe(1);
    });
});
