import createExpressionTree from "./createExpressionTree";
import evaluateExpressionTree from "./evaluateExpressionTree";
import toFixedIfNecessary from "./toFixedIfNecessary";

export default function cleanUpNum(exp: string): string {
    const rootPattern = /\((.*?)\)/; // This regex pattern captures text between root
    const rootMatch = exp.match(rootPattern);

    if (rootMatch) {
        const num = Number(rootMatch[1]);
        return toFixedIfNecessary(Math.sqrt(num), 3).toString();
    } else if (exp.indexOf("/") !== -1) {
        const tree = createExpressionTree(exp);
        const result = evaluateExpressionTree(tree);
        return toFixedIfNecessary(result, 3).toString();
    } else if (exp.indexOf("²") !== -1) {
        const num = Number(exp.slice(0, exp.length - 1));
        return (num ** 2).toString();
    }

    return exp;
}
