export default function twoSum(nums: number[], target: number): number[] {
    // O(n)
    const hashMap = new Map<number, number>();
    const res: number[] = [];
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        const rest = target - nums[i];

        if (hashMap.has(rest)) res.push(hashMap.get(rest)!, i);

        hashMap.set(nums[i], i);
    }

    return res;
}

export function twoSum2(nums: number[], target: number): number[] {
    // O(n^2)
    const idxList = [];
    const len = nums.length;

    function sum(num1: number, num2: number): number {
        return num1 + num2;
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i !== j) {
                if (sum(nums[i], nums[j]) === target) {
                    idxList.push(i, j);
                }
            }
        }
    }

    return Array.from(new Set(idxList));
}
