export default function evaluateRoot(expression: string): string {
    const num = Number(expression);
    return Math.sqrt(num).toString();
}
