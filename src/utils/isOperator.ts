export default function isOperator(str: string): boolean {
    const operators = ["+", "-", "*", "/"];
    return operators.includes(str);
}
