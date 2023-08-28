import { Operator } from "./createExpressionTree";

export default function findLast(
    arr: string[],
    operators: Operator[]
): number | undefined {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (operators.includes(arr[i] as Operator)) {
            return i;
        }
    }
    return;
}
