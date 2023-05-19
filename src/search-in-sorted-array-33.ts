export default function search(nums: number[], target: number): number {
    if (nums.length === 1 && target === nums[0]) return 0;
    if (nums.length === 1 && target !== nums[0]) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else if (target > nums[mid] && target <= nums[right]) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}
