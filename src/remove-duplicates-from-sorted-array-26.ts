export default function removeDuplicates(nums: number[]): number {
    if (!nums.length) return 0;

    if (nums.length === 1) return 1;

    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[count] = nums[i];
            count++;
        }
    }

    return count;
}
