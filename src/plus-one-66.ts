export default function plusOne(digits: number[]): number[] {
    let carry = 1;
    let i = digits.length - 1;

    while (i >= 0) {
        if (i === 0 && digits[i] === 9 && carry) {
            digits[i] = 0;
            digits.unshift(1);
        } else if (digits[i] === 9 && carry) {
            digits[i] = 0;
        } else if (carry) {
            digits[i] += carry;
            carry = 0;
        }

        i--;
    }

    return digits;
}
