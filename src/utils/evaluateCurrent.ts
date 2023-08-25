// import evaluateFraction from "./evaluateFraction";
// import evaluateRoot from "./evaluateRoot";
// import evaluateSquare from "./evaluateSquare";
import evaluateTwoNumbers from "./evaluateTwoNumbers";

export default function evaluateCurrent(
    currentNumber: string,
    operation: string
): string {
    switch (operation) {
        case "root":
            return evaluateTwoNumbers(currentNumber, "root").toString();
        // return evaluateRoot(currentNumber);

        case "square":
            return evaluateTwoNumbers(currentNumber, "square").toString();
        // return evaluateSquare(currentNumber);

        case "fraction":
            return evaluateTwoNumbers(currentNumber, "fraction").toString();
        // return evaluateFraction(currentNumber);
    }

    return currentNumber;
}
