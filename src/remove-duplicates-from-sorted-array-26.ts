export default function removeDuplicates(nums: number[]): number {
    const mapping = new Map<number, number>();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        mapping.set(num, (mapping.get(num) || 0) + 1);
    }

    for (const [, v] of mapping) {
        count += v - 1;
    }

    return count;
}
