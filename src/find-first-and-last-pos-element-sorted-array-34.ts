function binarySearch(nums: number[], target: number, first: boolean): number {
    let idx = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor(end / 2);

        if (nums[mid] < target) start = mid + 1;
        else if (nums[mid] > target) end = mid - 1;
        else {
            idx = mid;

            if (first) end = mid - 1;
            else start = mid + 1;
        }
    }

    return idx;
}

export default function searchRange(nums: number[], target: number): number[] {
    if (!nums.length) return [-1, -1];

    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target, false);

    const result = [left, right];

    return result;
}
