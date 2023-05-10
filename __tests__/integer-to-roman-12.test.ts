import intToRoman from '@src/integer-to-roman-12';

describe('Integer to Roman', () => {
    test('should return III', () => {
        expect(intToRoman(3)).toBe('III');
    });

    test('should return IV', () => {
        expect(intToRoman(4)).toBe('IV');
    });

    test('should return LVIII', () => {
        expect(intToRoman(58)).toBe('LVIII');
    });

    test('should return MCMXCIV', () => {
        expect(intToRoman(1994)).toBe('MCMXCIV');
    });
});
