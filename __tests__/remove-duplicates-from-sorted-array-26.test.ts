import removeDuplicates from '@src/remove-duplicates-from-sorted-array-26';

describe('Remove duplicates from sorted array', () => {
    test('should return 1', () => {
        const nums = [1, 1, 2];
        expect(removeDuplicates(nums)).toEqual(1);
    });

    test('should return 5', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        expect(removeDuplicates(nums)).toEqual(5);
    });
});
