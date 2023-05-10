function myAtoi(s: string): number {
    if (s.length === 0) return 0;

    s = s.trimStart();

    if (Number.isNaN(parseInt(s[0], 10)) && s[0] !== '-' && s[0] !== '+')
        return 0;

    const isNegative = s[0] === '-';

    let firstNonDigitIndex = -1;
    const hasSignal = s[0] === '-' || s[0] === '+';
    const firstDigitIndex = hasSignal ? 1 : 0;

    for (let i = firstDigitIndex; i < s.length; i++) {
        const current = s[i];
        if (Number.isNaN(parseInt(current, 10))) {
            firstNonDigitIndex = i;
            break;
        }
    }

    const digits = s.substring(
        firstDigitIndex,
        firstNonDigitIndex < 0 ? s.length : firstNonDigitIndex
    );

    const num = parseInt(digits, 10);

    if (Number.isNaN(num)) return 0;

    let result = isNegative ? -num : num;

    result = Math.min(Math.pow(2, 31) - 1, Math.max(-Math.pow(2, 31), result));

    return result;
}

export default myAtoi;
