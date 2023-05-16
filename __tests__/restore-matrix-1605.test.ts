import restoreMatrix from '@src/restore-matrix-1605';

describe('restoreMatrix', () => {
    test('rowSum = [3,8], colSum = [4,7] should return [[3,0],[1,7]]', () => {
        const rowSum = [3, 8];
        const colSum = [4, 7];
        const expected = [
            [3, 0],
            [1, 7]
        ];
        const result = restoreMatrix(rowSum, colSum);
        expect(result).toEqual(expected);
    });

    test('rowSum = [5,7,10], colSum = [8,6,8] should return [[0,5,0],[6,1,0],[2,0,8]]', () => {
        const rowSum = [5, 7, 10];
        const colSum = [8, 6, 8];
        const expected = [
            [0, 5, 0],
            [6, 1, 0],
            [2, 0, 8]
        ];
        const result = restoreMatrix(rowSum, colSum);
        expect(result).toEqual(expected);
    });
});
