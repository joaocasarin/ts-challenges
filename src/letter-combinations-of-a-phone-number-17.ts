export default function letterCombinations(digits: string): string[] {
    const mapping: Record<string, string[]> = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    const numCount = digits.length;

    if (numCount === 0) return [];
    if (numCount === 1) return mapping[digits];

    let result = new Array<string>('');

    for (let i = 0; i < numCount; i++) {
        const num = digits[i];
        const letters = mapping[num];
        const temp: string[] = [];

        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < letters.length; k++) {
                temp.push(result[j] + letters[k]);
            }
        }

        result = temp;
    }

    return result;
}
