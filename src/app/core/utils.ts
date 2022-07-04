export function getScoreColour(R:any, score: number | null, defaultColor = 'LightGray') {
    if (R.isNil(score) || Number.isNaN(score) || score > 10) {
        return defaultColor;
    }
    if (score <= 2.5) {
        return '#ce181f';
    }
    if (score <= 5) {
        return '#f47721';
    }
    if (score <= 7.5) {
        return '#ffc709';
    }
    return '#d6e040';
}