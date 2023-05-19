import search from '@src/search-in-sorted-array';

describe('search-in-sorted-array', () => {
    test('should return 4 for nums = [4,5,6,7,0,1,2], target = 0', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    });

    test('should return -1 for nums = [4,5,6,7,0,1,2], target = 3', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    });

    test('should return -1 for nums = [1], target = 0', () => {
        expect(search([1], 0)).toBe(-1);
    });
});
