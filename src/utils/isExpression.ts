export default function isExpression(arr: string[]): boolean {
    const minusOperatorPattern = /(?<!\()-/;
    const result =
        arr.includes("*") ||
        arr.includes("/") ||
        arr.includes("+") ||
        arr.findIndex((value) => minusOperatorPattern.test(value)) !== -1;
    return result;
}
