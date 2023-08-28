import findLast from "./findLast";
import isExpression from "./isExpression";

export type Operator = "*" | "/" | "+" | "-";

export interface ExpressionTree {
    operator: Operator;
    a: string | ExpressionTree;
    b: string | ExpressionTree;
}

export default function createExpressionTree(
    expression: string[]
): ExpressionTree {
    const processedExpression = expression.map((item) =>
        Number(item) < 0 ? `(${item})` : item
    ); // wraps negative numbers in parentheses so they are treated as numbers and not an expression

    const tree = {} as ExpressionTree;

    const operatorIndex =
        findLast(processedExpression, ["+", "-"]) ||
        (findLast(processedExpression, ["*", "/"]) as number);

    tree.operator = processedExpression[operatorIndex] as Operator;

    const firstOperand = processedExpression.slice(0, operatorIndex);
    const secondOperand = processedExpression.slice(operatorIndex + 1);
    tree.a = isExpression(firstOperand)
        ? createExpressionTree(firstOperand)
        : firstOperand[0];
    tree.b = isExpression(secondOperand)
        ? createExpressionTree(secondOperand)
        : secondOperand[0];

    return tree;
}
