export default function lengthOfLastWord(s: string): number {
    return s
        .split(' ')
        .filter((el) => el !== '')
        .at(-1)!.length;
}
