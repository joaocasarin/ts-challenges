import lengthOfLastWord from '@src/length-of-last-word-58';

describe('lengthOfLastWord', () => {
    test('should return 5 for "Hello World"', () => {
        expect(lengthOfLastWord('Hello World')).toBe(5);
    });

    test('should return 4 for "   fly me   to   the moon  "', () => {
        expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
    });

    test('should return 6 for "luffy is still joyboy"', () => {
        expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
    });
});
