export default function isExpression(arr: string[]): boolean {
    const result =
        arr.includes("*") ||
        arr.includes("/") ||
        arr.includes("+") ||
        arr.includes("-");
    return result;
}
