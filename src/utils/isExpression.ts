export default function isExpression(str: string): boolean {
    const minusOperatorPattern = /(?<!\()-/;
    const result =
        str.includes("*") ||
        str.includes("/") ||
        str.includes("+") ||
        Boolean(str.match(minusOperatorPattern));
    return result;
}
