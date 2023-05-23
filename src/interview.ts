/* eslint-disable no-console */
export const testCases: TestCase[] = [
    {
        testNumber: 1,
        haystack: [9, 1, 2, 3],
        needle: [1, 2, 3],
        expectedResult: true
    },
    {
        testNumber: 2,
        haystack: [1, 1, 2, 4],
        needle: [1, 2, 3],
        expectedResult: false
    },
    {
        testNumber: 3,
        haystack: [1, 2],
        needle: [1, 2, 3],
        expectedResult: false
    },
    {
        testNumber: 4,
        haystack: [1, 1, 3, 1, 2, 3],
        needle: [1, 2, 3],
        expectedResult: true
    },
    {
        testNumber: 5,
        haystack: [1, 2, 4, 3],
        needle: [1, 2, 3],
        expectedResult: false
    },
    {
        testNumber: 6,
        haystack: [1, 2, 3],
        needle: [1, 2, 3, 4],
        expectedResult: false
    },
    {
        testNumber: 7,
        haystack: [],
        needle: [1, 2, 3, 4],
        expectedResult: false
    },
    {
        testNumber: 8,
        haystack: [1, 2, 3],
        needle: [],
        expectedResult: true
    },
    {
        testNumber: 9,
        haystack: [],
        needle: [],
        expectedResult: true
    },
    {
        testNumber: 10,
        haystack: [1, 1, 1, 1, 2, 3],
        needle: [1, 1, 2, 3],
        expectedResult: true
    }
];

/**
 * @description Decide if a given sequence of numbers (haystack) includes the sequence of 1 2 3 (needle) in that order.
 * @returns TRUE if the needle is found in the haystack and FALSE otherwise
 */
export default function doesContainArray(
    haystack: number[],
    needle: number[]
): boolean {
    if (needle.length > haystack.length) return false;

    if (!needle.length && !haystack.length) return true;

    if (!needle.length) return true;

    let res = false;
    let track = 0;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[track]) {
            res = true;
            track++;
        } else {
            track = 0;
            res = false;
        }
    }

    return res;
}

// should not work
export function doesContainArrayHardCoded(
    haystack: number[],
    needle: number[]
): boolean {
    if (haystack.length < 3) return false;
    const map: { [key: number]: boolean } = {};
    let counter = needle[0];

    for (let i = 1; i < haystack.length; i++) {
        const curr = haystack[i];
        const prev = haystack[i - 1];
        if (prev === counter && curr === prev + 1) {
            map[counter] = true;
            counter++;
        } else {
            map[1] = false;
            map[2] = false;
            map[3] = false;
        }

        if (counter > 3) break;
    }

    for (const [, v] of Object.entries(map)) {
        if (!v) return false;
    }

    return true;
}

export function doesContainArrayCheat(
    haystack: number[],
    needle: number[]
): boolean {
    const hayStr = haystack.slice().toString();
    const neeStr = needle.slice().toString();
    const reg = neeStr;

    return hayStr.includes(reg);
}

export function doesContainArray2Loop(
    haystack: number[],
    needle: number[]
): boolean {
    if (needle.length > haystack.length) return false;

    if (!needle.length && !haystack.length) return true;

    if (!needle.length) return true;

    let res = false;

    // space: O(1)
    // time: O(n*m)
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (i + j >= haystack.length) return false;

                if (needle[j] !== haystack[i + j]) {
                    res = false;
                    break;
                } else {
                    res = true;
                }
            }
        }
    }

    return res;
}

// Plumbing for testing the code
function main(): void {
    const failed: number[] = [];
    console.log('\n\n========== Start ==========');
    testCases.forEach((testCase) => {
        try {
            const result = doesContain123(testCase.haystack, testCase.needle);
            const passed = result === testCase.expectedResult;
            if (!passed) {
                failed.push(testCase.testNumber);
            }
            console.log(
                `Test #${testCase.testNumber} ${
                    passed
                        ? 'passed'
                        : `failed: expected "${testCase.expectedResult}", but got "${result}"`
                }`
            );
        } catch (e) {
            console.log(
                `TestCase ${testCase.testNumber}: caused an exception (${
                    (e as Error).message
                }) => test case failed`
            );
            failed.push(testCase.testNumber);
        }
    });
    console.log(
        `\n\nResult: test suite ${
            failed.length === 0
                ? 'passed'
                : `failed. failed test(s): ${failed.toString()}`
        }`
    );
}

class TestCase {
    testNumber: number;

    haystack: number[];

    needle: number[];

    expectedResult: boolean;

    constructor(
        testNumber: number,
        haystack: number[],
        needle: number[],
        expectedResult: boolean
    ) {
        this.testNumber = testNumber;
        this.haystack = haystack;
        this.needle = needle;
        this.expectedResult = expectedResult;
    }
}

main();

/*
KMP string search algorithm
Time complexity O(n+m); n = haystack.length (loop through), m = needle.length (building prefix table)
Space complexity = 0(m); m = needle.length (prefix table size)
https://www.youtube.com/watch?v=mAqsI9Jw1RI
https://cmps-people.ok.ubc.ca/ylucet/DS/KnuthMorrisPratt.html
https://gist.github.com/larrybahr-ocelot/1db744203004152456271f017526a6b1
*/
export function doesContain123(haystack: number[], needle: number[]): boolean {
    if (needle.length === 0) {
        // The empty set is a subset of any other set
        return true;
    }
    const prefixTable = getLongestProperPrefixArray(needle);
    let i = 0;
    let j = 0;

    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        } else if (j > 0) {
            j = prefixTable[j - 1];
        } else {
            i++;
        }
    }

    return j === needle.length;
}

/*
Time complexity O(m); m = needle.length
Space complexity = 0(m); m = needle.length (prefix table size)
*/
/**
 * @description - Create the prefix table. For a visual of the algorithm @see{@link https://medium.com/@aakashjsr/preprocessing-algorithm-for-kmp-search-lps-array-algorithm-50e35b5bb3cb}
 * @param needle - data that will be searched
 * @returns where the value at an index ‘i’ indicates the length of the longest proper prefix which is also the same as the proper suffix for the string containing the first ‘i’ characters.
 */
function getLongestProperPrefixArray(needle: number[]): number[] {
    const lps: number[] = new Array(needle.length);
    let index = 1; // used to iterate over the needle
    let length = 0; // length of the longest prefix found so far

    lps.fill(0); // Initialize to all 0s. NOTE: LPS[0] of any pattern is always 0.

    while (index < needle.length) {
        if (needle[index] === needle[length]) {
            length++;
            lps[index] = length;
            index++;
        } else if (length > 0) {
            length = lps[length - 1];
        } else {
            // Not a matche and there is no repeating prefix so go to the next item
            lps[index] = 0;
            index++;
        }
    }
    return lps;
}
