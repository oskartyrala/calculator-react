export type Operator = "*" | "/" | "+" | "-";

export interface ExpressionTree {
    operator: Operator;
    a: string | ExpressionTree;
    b: string | ExpressionTree;
}

function removeParentheses(str: string): string {
    const parenthesesPattern = /\((.*?)\)/; // This regex pattern captures text between parentheses
    const parenthesesMatch = str.match(parenthesesPattern);

    return parenthesesMatch ? parenthesesMatch[1] : str;
}

function findLast(arr: string[], operators: Operator[]): number | undefined {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (operators.includes(arr[i] as Operator)) {
            return i;
        }
    }
    return;
}

function isExpression(operand: string[]): boolean {
    return operand.some(isOperator);
}

function isOperator(str: string): boolean {
    const operators = ["+", "-", "*", "/"];
    return operators.includes(str);
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
        : removeParentheses(firstOperand[0]);
    tree.b = isExpression(secondOperand)
        ? createExpressionTree(secondOperand)
        : removeParentheses(secondOperand[0]);

    return tree;
}
