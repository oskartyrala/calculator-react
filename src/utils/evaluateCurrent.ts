import evaluateTwoNumbers from "./evaluateTwoNumbers";

export default function evaluateCurrent(
    currentNumber: string,
    operation: string
): string {
    switch (operation) {
        case "root":
            return evaluateTwoNumbers(currentNumber, "root").toString();

        case "square":
            return evaluateTwoNumbers(currentNumber, "square").toString();

        case "fraction":
            return evaluateTwoNumbers(currentNumber, "fraction").toString();
    }

    return currentNumber;
}
