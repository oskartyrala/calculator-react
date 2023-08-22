import { Operator } from "./createExpressionTree";

export default function findLast(str: string, operators: Operator[]): number {
    let index = -1;
    for (let i = str.length - 1; i >= 0; i--) {
        if (operators.includes(str[i] as Operator) && str[i - 1] !== "(") {
            index = i;
            break;
        }
    }
    return index;
}
