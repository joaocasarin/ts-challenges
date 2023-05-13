export default function isValid(s: string): boolean {
    if (s.length % 2 !== 0 || s.length === 0) {
        return false;
    }

    const mapping: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else {
            const last = stack.pop();

            if (last !== mapping[char]) {
                return false;
            }
        }
    }

    return !stack.length;
}
