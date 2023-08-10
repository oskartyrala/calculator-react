import findLast from "./findLast";
import isExpression from "./isExpression";

export type Operator = "*" | "/" | "+" | "-";

export interface ExpressionTree {
    operator: Operator;
    a: string | ExpressionTree;
    b: string | ExpressionTree;
}

export default function createExpressionTree(
    expression: string
): ExpressionTree {
    const tree = {} as ExpressionTree;
    let operatorIndex = -1;

    if (expression.includes("+") || expression.includes("-")) {
        operatorIndex = findLast(expression, ["+", "-"]);
        // tree.operator = expression.split("").findLast(item => item === "+" || item === "-") as Operator;
    } else if (expression.includes("*") || expression.includes("/")) {
        // tree.operator = expression.split("").findLast(item => item === "*" || item === "/") as Operator;
        operatorIndex = findLast(expression, ["*", "/"]);
    }

    tree.operator = expression[operatorIndex] as Operator;
    console.log(`first operator: ${tree.operator}`);

    const firstOperand = expression.substring(0, operatorIndex);
    const secondOperand = expression.substring(operatorIndex + 1);
    tree.a = isExpression(firstOperand)
        ? createExpressionTree(firstOperand)
        : firstOperand;
    tree.b = isExpression(secondOperand)
        ? createExpressionTree(secondOperand)
        : secondOperand;

    return tree;
}
