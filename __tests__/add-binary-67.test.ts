import addBinary from '@src/add-binary-67';

describe('addBinary', () => {
    test('should return "100" for a = "11", b = "1"', () => {
        expect(addBinary('11', '1')).toBe('100');
    });

    test('should return "10101" for a = "1010", b = "1011"', () => {
        expect(addBinary('1010', '1011')).toBe('10101');
    });

    test('should return "0" for a = "0", b = "0"', () => {
        expect(addBinary('0', '0')).toBe('0');
    });

    test('should return "1" for a = "0", b = "1"', () => {
        expect(addBinary('0', '1')).toBe('1');
    });
});
