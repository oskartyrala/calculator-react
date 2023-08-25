import getButtonValue from "../utils/getButtonValue";
import OneButton from "./OneButton";
import isOperator from "../utils/isOperator";
import getOperatorSymbol from "../utils/getOperatorSymbol";
import createExpressionTree from "../utils/createExpressionTree";
import evaluateExpressionTree from "../utils/evaluateExpressionTree";
// import prepareRootSquareFraction from "../utils/prepareRootSquareFrancion";
import evaluateCurrent from "../utils/evaluateCurrent";

interface ButtonPadProps {
    currentNumber: string;
    fullExpression: string[];
    setCurrentNumber: React.Dispatch<React.SetStateAction<string>>;
    setFullExpression: React.Dispatch<React.SetStateAction<string[]>>;
    writingMode: "replace" | "edit";
    setWritingMode: React.Dispatch<React.SetStateAction<"replace" | "edit">>;
}

export function ButtonPad({
    currentNumber,
    fullExpression,
    setCurrentNumber,
    setFullExpression,
    writingMode,
    setWritingMode,
}: ButtonPadProps): JSX.Element {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operators = ["plus", "minus", "multiply", "divide"];
    const squareRootFraction = ["square", "root", "fraction"];

    const handleClearEntry = () => {
        setCurrentNumber("0");
        setWritingMode("replace");
    };

    const handleClear = () => {
        setCurrentNumber("0");
        setFullExpression([]);
        setWritingMode("replace");
    };

    const handleBackspace = () => {
        setCurrentNumber((prev) =>
            prev.length > 1 ? prev.slice(0, prev.length - 1) : "0"
        );
        if (currentNumber.length === 1) {
            setWritingMode("replace");
        }
    };

    const handleSquareRootFraction = (
        button: "root" | "square" | "fraction"
    ) => {
        const evaluated = evaluateCurrent(currentNumber, button);
        setCurrentNumber(evaluated);
        setWritingMode("replace");
    };

    const handleOperators = (operatorName: string): void => {
        const operatorSymbol = getOperatorSymbol(operatorName);
        const lastChar = fullExpression[fullExpression.length - 1];
        if (isOperator(lastChar) && currentNumber === "0") {
            const expressionSoFar = fullExpression.slice(
                0,
                fullExpression.length - 1
            );
            setFullExpression([...expressionSoFar, operatorSymbol]);
        } else {
            const currentIsNegative = currentNumber.includes("-");
            const numToPrint = currentIsNegative
                ? `(${evaluateCurrent(currentNumber, operatorName)})`
                : evaluateCurrent(currentNumber, operatorName);
            setFullExpression((prev) => [...prev, numToPrint, operatorSymbol]);
        }
        setCurrentNumber("0");
        setWritingMode("replace");
    };
    const handleNumbers = (button: string): void => {
        setCurrentNumber(
            (prev) =>
                (writingMode === "replace"
                    ? prev.includes("-")
                        ? "-"
                        : ""
                    : prev) + getButtonValue(button)
        );

        if (writingMode === "replace") {
            setWritingMode("edit");
        }
    };

    const handleNegativeToggle = () => {
        if (currentNumber.includes("-")) {
            setCurrentNumber((prev) => prev.slice(1));
        } else {
            setCurrentNumber((prev) => `-${prev}`);
        }
    };

    const handleDecimal = (): void => {
        if (!currentNumber.includes(".")) {
            setCurrentNumber(
                (prev) => `${writingMode === "replace" ? "0" : prev}.`
            );
        }

        if (writingMode === "replace") {
            setWritingMode("edit");
        }
    };

    const handleEquals = (): void => {
        const numToPrint = evaluateCurrent(currentNumber, "");
        const expressionTree = createExpressionTree(
            [...fullExpression, numToPrint].join("")
        );

        const result = evaluateExpressionTree(expressionTree).toString();
        setCurrentNumber(result);
        setFullExpression([]);
        setWritingMode("replace");
    };

    return (
        <div className="btn-pad">
            <OneButton
                handleButton={() => setCurrentNumber((prev) => prev)}
                id={"percent"}
            />

            <OneButton handleButton={() => handleClearEntry()} id={"CE"} />

            <OneButton handleButton={() => handleClear()} id={"C"} />

            <OneButton
                handleButton={() => handleBackspace()}
                id={"backspace"}
            />

            {squareRootFraction.map((button) => (
                <OneButton
                    handleButton={() =>
                        handleSquareRootFraction(
                            button as "root" | "square" | "fraction"
                        )
                    }
                    key={button}
                    id={button}
                />
            ))}

            <OneButton
                handleButton={() => handleNegativeToggle()}
                id={"negativetoggle"}
            />

            <OneButton handleButton={() => handleDecimal()} id={"decimal"} />

            <OneButton handleButton={() => handleEquals()} id={"equals"} />

            {operators.map((button) => {
                return (
                    <OneButton
                        handleButton={() => handleOperators(button)}
                        key={button}
                        id={button}
                    />
                );
            })}

            {numbers.map((button) => (
                <OneButton
                    handleButton={() => handleNumbers(button)}
                    key={button}
                    id={button}
                />
            ))}
        </div>
    );
}
