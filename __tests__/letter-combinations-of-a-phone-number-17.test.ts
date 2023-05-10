import letterCombinations from '@src/letter-combinations-of-a-phone-number-17';

describe('Letter Combinations of a Phone Number', () => {
    test('should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] when input "23"', () => {
        expect(letterCombinations('23')).toEqual([
            'ad',
            'ae',
            'af',
            'bd',
            'be',
            'bf',
            'cd',
            'ce',
            'cf'
        ]);
    });

    test('should return ["a", "b", "c"] when input "2"', () => {
        expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
    });

    test('should return ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"] when input is "234"', () => {
        expect(letterCombinations('234')).toEqual([
            'adg',
            'adh',
            'adi',
            'aeg',
            'aeh',
            'aei',
            'afg',
            'afh',
            'afi',
            'bdg',
            'bdh',
            'bdi',
            'beg',
            'beh',
            'bei',
            'bfg',
            'bfh',
            'bfi',
            'cdg',
            'cdh',
            'cdi',
            'ceg',
            'ceh',
            'cei',
            'cfg',
            'cfh',
            'cfi'
        ]);
    });
});
