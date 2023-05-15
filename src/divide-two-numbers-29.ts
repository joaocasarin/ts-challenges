export default function divide(dividend: number, divisor: number): number {
    const isNegative =
        (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);
    let up = Math.abs(dividend);
    const down = Math.abs(divisor);
    let res = 0;

    while (up >= down) {
        let temp = down;
        let multiple = 1;

        while (up >= temp) {
            up -= temp;
            res += multiple;
            multiple += multiple;
            temp += temp;
        }
    }

    if (isNegative) {
        res = -res;
    }

    res = Math.min(2 ** 31 - 1, Math.max(-(2 ** 31), res));
    return res;
}
