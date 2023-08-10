import evaluateSimpleExpression from "./evaluateSimpleExpression";
import { ExpressionTree } from "./createExpressionTree";

export default function evaluateExpressionTree({
    operator,
    a,
    b,
}: ExpressionTree): number {
    console.log(`Running with a: ${a}, b: ${b}, operator: ${operator}`);
    const num1 =
        typeof a === "string" ? a : evaluateExpressionTree(a).toString();
    const num2 =
        typeof b === "string" ? b : evaluateExpressionTree(b).toString();
    return evaluateSimpleExpression(num1, num2, operator);
}
