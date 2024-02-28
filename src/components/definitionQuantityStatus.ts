export default function definitionQuantityStatus(value: number) {
    if (value <= 10) return 'level-low';
    if (value > 20) return 'level-high';
    return 'level-medium';
}