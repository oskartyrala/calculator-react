import toFixedIfNecessary from "./toFixedIfNecessary";

export default function evaluateRoot(expression: string): string {
    const num = Number(expression);
    return toFixedIfNecessary(Math.sqrt(num), 3).toString();
}
