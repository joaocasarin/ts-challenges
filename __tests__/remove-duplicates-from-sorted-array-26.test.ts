import removeDuplicates from '@src/remove-duplicates-from-sorted-array-26';

describe('Remove duplicates from sorted array', () => {
    test('should return 2', () => {
        const nums = [1, 1, 2];
        const expectedNums = [1, 2];

        const k = removeDuplicates(nums);

        expect(expectedNums.length).toEqual(k);

        for (let i = 0; i < k; i++) {
            expect(nums[i]).toEqual(expectedNums[i]);
        }
    });

    test('should return 5', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const expectedNums = [0, 1, 2, 3, 4];

        const k = removeDuplicates(nums);

        expect(expectedNums.length).toEqual(k);

        for (let i = 0; i < k; i++) {
            expect(nums[i]).toEqual(expectedNums[i]);
        }
    });
});
