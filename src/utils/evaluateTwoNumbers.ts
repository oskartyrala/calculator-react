export default function evaluateTwoNumbers(
    firstOperand: string,
    operator: string,
    secondOperand?: string
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

        case "square":
            return num1 * num1;

        case "root":
            return Number(Math.sqrt(num1).toFixed(3));

        case "fraction":
            return Number((1 / num1).toFixed(3));

        default:
            return 0;
    }
}
