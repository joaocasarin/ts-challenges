const romanNumbers: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

export default function intToRoman(num: number): string {
    let result = '';

    for (const roman of Object.keys(romanNumbers)) {
        const numberCount = num / romanNumbers[roman];
        num %= romanNumbers[roman];

        result += roman.repeat(Math.floor(numberCount));
    }

    return result;
}
