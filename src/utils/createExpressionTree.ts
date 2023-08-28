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
    const negativeNumbersWithoutParentheses = /^-\d+(\.\d+)?$/;
    const expressionWithParentheses = expression.map((item) =>
        item.match(negativeNumbersWithoutParentheses) ? `(${item})` : item
    );

    const tree = {} as ExpressionTree;
    let operatorIndex = -1;

    if (
        expressionWithParentheses.includes("+") ||
        expressionWithParentheses.includes("-")
    ) {
        operatorIndex = findLast(expressionWithParentheses, ["+", "-"]);
    } else if (
        expressionWithParentheses.includes("*") ||
        expressionWithParentheses.includes("/")
    ) {
        operatorIndex = findLast(expressionWithParentheses, ["*", "/"]);
    }

    tree.operator = expressionWithParentheses[operatorIndex] as Operator;

    const firstOperand = expressionWithParentheses.slice(0, operatorIndex);
    const secondOperand = expressionWithParentheses.slice(operatorIndex + 1);
    tree.a = isExpression(firstOperand)
        ? createExpressionTree(firstOperand)
        : firstOperand[0];
    tree.b = isExpression(secondOperand)
        ? createExpressionTree(secondOperand)
        : secondOperand[0];

    return tree;
}
