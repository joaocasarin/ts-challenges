export default function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const s = String(x);
    const reverse = s.split('').reverse().join('');

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== reverse[i]) return false;
    }

    return true;
}
