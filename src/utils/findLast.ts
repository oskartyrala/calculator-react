import { Operator } from "./createExpressionTree";

export default function findLast(str: string, operators: Operator[]): number {
    let index = -1;
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(`checking ${str[i]}`);
        if (operators.includes(str[i] as Operator)) {
            index = i;
            console.log(`Found it: index is ${index}`);
            break;
        }
    }
    return index;
}
