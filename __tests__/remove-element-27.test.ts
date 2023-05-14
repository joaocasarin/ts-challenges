import removeElement from '@src/remove-element-27';

function testRemoveElement(
    nums: number[],
    val: number,
    expectedNums: number[]
) {
    const k = removeElement(nums, val);

    expect(expectedNums.length).toEqual(k);

    for (let i = 0; i < k; i++) {
        expect(nums[i]).toEqual(expectedNums[i]);
    }
}

describe('Remove element', () => {
    test('should return 2', () => {
        const nums = [3, 2, 2, 3];
        const val = 3;
        const expectedNums = [2, 2];

        testRemoveElement(nums, val, expectedNums);
    });

    test('should return 2', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;
        const expectedNums = [0, 1, 3, 0, 4];

        testRemoveElement(nums, val, expectedNums);
    });
});
