import isValid from '@src/valid-parentheses-20';

describe('valid-parentheses-20', () => {
    test('should return false if the string length is odd', () => {
        expect(isValid('((())))')).toBe(false);
    });

    test('should return true for ()', () => {
        expect(isValid('()')).toBe(true);
    });

    test('should return true for ()[]{}', () => {
        expect(isValid('()[]{}')).toBe(true);
    });

    test('should return false for (]', () => {
        expect(isValid('(]')).toBe(false);
    });

    test('should return false for ([)]', () => {
        expect(isValid('([)]')).toBe(false);
    });

    test('should return false for (]', () => {
        expect(isValid('(]')).toBe(false);
    });

    test('should return false for ((', () => {
        expect(isValid('((')).toBe(false);
    });
});
