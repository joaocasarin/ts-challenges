import { doesContain123 } from '@src/interview';

describe('doesContain123', () => {
    test('should return true for haystack: [9, 1, 2, 3] and needle: [1, 2, 3]', () => {
        expect(doesContain123([9, 1, 2, 3], [1, 2, 3])).toBe(true);
    });

    test('should return false for haystack: [1, 1, 2, 4] and needle: [1, 2, 3]', () => {
        expect(doesContain123([1, 1, 2, 4], [1, 2, 3])).toBe(false);
    });

    test('should return false for haystack: [1, 2] and needle: [1, 2, 3]', () => {
        expect(doesContain123([1, 2], [1, 2, 3])).toBe(false);
    });

    test('should return true for haystack: [1, 1, 3, 1, 2, 3] and needle: [1, 2, 3]', () => {
        expect(doesContain123([1, 1, 3, 1, 2, 3], [1, 2, 3])).toBe(true);
    });

    test('should return false for haystack: [1, 2, 4, 3] and needle: [1, 2, 3]', () => {
        expect(doesContain123([1, 2, 4, 3], [1, 2, 3])).toBe(false);
    });

    test('should return false for haystack: [1, 2, 3] and needle: [1, 2, 3, 4]', () => {
        expect(doesContain123([1, 2, 3], [1, 2, 3, 4])).toBe(false);
    });

    test('should return false for haystack: [] and needle: [1, 2, 3, 4]', () => {
        expect(doesContain123([], [1, 2, 3, 4])).toBe(false);
    });

    test('should return true for haystack: [1, 2, 3] and needle: []', () => {
        expect(doesContain123([1, 2, 3], [])).toBe(true);
    });

    test('should return true for haystack: [] and needle: []', () => {
        expect(doesContain123([], [])).toBe(true);
    });

    test('should return true for haystack: [1, 1, 1, 1, 2, 3] and needle: [1, 1, 2, 3]', () => {
        expect(doesContain123([1, 1, 1, 1, 2, 3], [1, 1, 2, 3])).toBe(true);
    });
});
