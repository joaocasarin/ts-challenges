import isPalindrome from '@src/palindrome-number-9';

describe('isPalindrome', () => {
    test('121 returns true', () => {
        expect(isPalindrome(121)).toBe(true);
    });

    test('-121 returns false', () => {
        expect(isPalindrome(-121)).toBe(false);
    });

    test('10 returns false', () => {
        expect(isPalindrome(10)).toBe(false);
    });

    test('-101 returns false', () => {
        expect(isPalindrome(-101)).toBe(false);
    });

    test('0 returns true', () => {
        expect(isPalindrome(0)).toBe(true);
    });
});
