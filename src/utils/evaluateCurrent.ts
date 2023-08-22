import evaluateFraction from "./evaluateFraction";
import evaluateRoot from "./evaluateRoot";
import evaluateSquare from "./evaluateSquare";

export default function evaluateCurrent(
    currentNumber: string,
    operation: string
): string {
    switch (operation) {
        case "root":
            return evaluateRoot(currentNumber);

        case "square":
            return evaluateSquare(currentNumber);

        case "fraction":
            return evaluateFraction(currentNumber);
    }

    return currentNumber;
}
