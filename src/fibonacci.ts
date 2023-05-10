export default function fibonacciNoRecursion(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

export function fibonacciNoRecursionForArray(numbers: number[]): number[] {
    const max = Math.max(...numbers);

    const results: number[] = [];
    let prev = 0;
    let curr = 1;

    const fib: { [key: number]: number } = { 0: 0, 1: 1 };

    for (let i = 2; i <= max; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;

        fib[i] = curr;
    }

    for (const num of numbers) {
        if (num in fib) {
            results.push(fib[num]);
        }
    }

    return results;
}

// fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// fibonacci sequence: 0, 1, 2, 3, 4, 5, 6,  7,  8,  9, ...
