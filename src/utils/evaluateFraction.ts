import createExpressionTree from "./createExpressionTree";
import evaluateExpressionTree from "./evaluateExpressionTree";

export default function evaluateFraction(num: string): string {
    const expression = `1/${num}`;
    const tree = createExpressionTree(expression);
    const result = Number(evaluateExpressionTree(tree));
    return Math.abs(result).toString();
}
