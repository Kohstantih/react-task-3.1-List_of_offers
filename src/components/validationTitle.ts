export default function validationTitle(value: string) {
    if (value.length > 50) return `${value.slice(0, 50)}...`

    return value;
}