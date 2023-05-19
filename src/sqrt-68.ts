export default function mySqrt(x: number): number {
    // for (let i = 1; i <= x; i++) {
    //     if (i * i === x) return i;

    //     if (i * i > x) return i - 1;
    // }

    // return 0;

    let left = 1;
    let right = x;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value = mid * mid;

        if (value < x) left = mid + 1;
        else if (value > x) right = mid - 1;
        else return mid;
    }

    return right;
}
