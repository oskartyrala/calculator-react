import evaluateTwoNumbers from "./evaluateTwoNumbers";
import { ExpressionTree } from "./createExpressionTree";
import removeParentheses from "./removeParentheses";

export default function evaluateExpressionTree({
    operator,
    a,
    b,
}: ExpressionTree): number {
    const num1 =
        typeof a === "string"
            ? removeParentheses(a)
            : evaluateExpressionTree(a).toString();
    const num2 =
        typeof b === "string"
            ? removeParentheses(b)
            : evaluateExpressionTree(b).toString();
    return evaluateTwoNumbers(num1, operator, num2);
}
