import strStr from '@src/find-idx-first-occur-in-string-28';

describe('Find index of first occurence in string', () => {
    it('should return 2', () => {
        expect(strStr('hello', 'll')).toBe(2);
    });

    it('should return -1', () => {
        expect(strStr('aaaaa', 'bba')).toBe(-1);
    });

    it('should return 0', () => {
        expect(strStr('', '')).toBe(0);
    });
});
