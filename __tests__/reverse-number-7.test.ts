import reverse from '@src/reverse-number-7';

describe('reverse-number-7', () => {
    test('reverse(123) should return 321', () => {
        expect(reverse(123)).toBe(321);
    });

    test('reverse(-123) should return -321', () => {
        expect(reverse(-123)).toBe(-321);
    });

    test('reverse(120) should return 21', () => {
        expect(reverse(120)).toBe(21);
    });

    test('reverse(1534236469) should return 0', () => {
        expect(reverse(1534236469)).toBe(0);
    });
});
