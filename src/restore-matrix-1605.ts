export default function restoreMatrix(
    rowSum: number[],
    colSum: number[]
): number[][] {
    const numRows = rowSum.length;
    const numCols = colSum.length;
    const matrix: number[][] = [];

    // Initialize matrix with zeros
    for (let i = 0; i < numRows; i++) {
        matrix.push(new Array(numCols).fill(0));
    }

    // Fill matrix row by row
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const minValue = Math.min(rowSum[i], colSum[j]);
            matrix[i][j] = minValue;
            rowSum[i] -= minValue;
            colSum[j] -= minValue;
        }
    }

    return matrix;
}
