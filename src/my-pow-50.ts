export default function myPow(x: number, n: number): number {
    if (n === 0) return 1;

    if (n === 1) return x;

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1;
    while (n > 0) {
        if (n % 2 === 1) {
            result *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }

    return result;
}
