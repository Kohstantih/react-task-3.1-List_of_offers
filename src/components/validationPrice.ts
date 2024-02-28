export default function validationPrice(value: string) {
    if (value === 'USD') return '$';
    if (value === 'EUR') return '€';

    return `${value} `
}
