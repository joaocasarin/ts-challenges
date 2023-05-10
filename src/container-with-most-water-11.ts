export default function maxArea(height: number[]): number {
    if (height.length < 2) return 0;

    let maxVolume = 0;
    let leftColumn = 0;
    let rightColumn = height.length - 1;

    while (leftColumn < rightColumn) {
        const containerLength = rightColumn - leftColumn;
        const containerHeight = Math.min(
            height[leftColumn],
            height[rightColumn]
        );
        const volume = containerLength * containerHeight;

        maxVolume = Math.max(volume, maxVolume);

        if (height[leftColumn] < height[rightColumn]) leftColumn++;
        else if (height[leftColumn] > height[rightColumn]) rightColumn--;
        else leftColumn++;
    }

    return maxVolume;
}
