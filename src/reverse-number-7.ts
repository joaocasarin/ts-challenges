function reverse(x: number): number {
    const isNegative = x < 0;

    const reversed = Number(String(Math.abs(x)).split('').reverse().join(''));

    const result = isNegative ? -reversed : reversed;

    // if result is bigger than 2^31 - 1 or smaller than -2^31 return 0
    if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
        return 0;
    }

    return result;
}

export default reverse;
