export default function threeSumClosest(
    nums: number[],
    target: number
): number {
    nums.sort((a, b) => a - b);
    let result = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                return sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }

            const targetSumDiff = Math.abs(target - sum);
            const targetResultDiff = Math.abs(target - result);

            if (targetSumDiff < targetResultDiff) {
                result = sum;
            }
        }
    }

    return result;
}
