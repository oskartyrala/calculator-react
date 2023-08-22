export default function evaluateSquare(expression: string): string {
    const num = Number(expression);
    return (num ** 2).toString();
}
