export default function evaluateSimpleExpression(
    firstOperand: string,
    secondOperand: string,
    operator: string
): number {
    const num1 = Number(firstOperand);
    const num2 = Number(secondOperand);

    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        default:
            return 0;
    }
}
