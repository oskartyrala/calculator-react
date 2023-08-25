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
            return Math.sqrt(num1);

        case "fraction":
            return 1 / num1;

        default:
            return 0;
    }
}
