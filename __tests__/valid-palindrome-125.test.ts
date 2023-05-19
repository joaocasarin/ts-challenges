import isPalindrome from '@src/valid-palindrome-125';

describe('isPalindrome', () => {
    test('should return true for empty string', () => {
        expect(isPalindrome('')).toBe(true);
    });

    test('should return true for single character', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    test('should return true for "A man, a plan, a canal: Panama"', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });
});
