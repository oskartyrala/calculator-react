import createExpressionTree from "./createExpressionTree";
import evaluateExpressionTree from "./evaluateExpressionTree";
import toFixedIfNecessary from "./toFixedIfNecessary";

export default function evaluateFraction(num: string): string {
    const expression = `1/${num}`;
    const tree = createExpressionTree(expression);
    const result = Number(evaluateExpressionTree(tree));
    return toFixedIfNecessary(Math.abs(result), 3).toString();
}
