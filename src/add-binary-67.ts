export default function addBinary(a: string, b: string): string {
    if (a.length > b.length) b = b.padStart(a.length, '0');
    else if (a.length < b.length) a = a.padStart(b.length, '0');

    let carry = 0;
    const len = a.length - 1;
    const result = Array.from<number>({ length: a.length }).fill(0);

    for (let i = len; i >= 0; i--) {
        const sum = +a[i] + +b[i] + carry;
        result[i] = sum % 2;
        carry = Math.floor(sum / 2);

        if (i === 0 && carry > 0) result.unshift(carry);
    }

    return result.join('');
}
