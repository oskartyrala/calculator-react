export default function evaluateExpression(arr: string[]): number {
    const operatorPattern = /[+\-*/]/;
    const operator = arr.find((item) => operatorPattern.test(item));

    switch (operator) {
        case "+":
            return Number(arr[0]) + Number(arr[2]);

        case "-":
            return Number(arr[0]) - Number(arr[2]);

        case "*":
            return Number(arr[0]) * Number(arr[2]);

        case "/":
            return Number(arr[0]) / Number(arr[2]);

        default:
            return 0;
    }
}
