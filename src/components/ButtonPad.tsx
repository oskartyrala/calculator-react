import OneButton from "./OneButton";
import createExpressionTree, { Operator } from "../utils/createExpressionTree";
import evaluateExpressionTree from "../utils/evaluateExpressionTree";
import evaluateSimpleExpression from "../utils/evaluateSimpleExpression";
import getButtonValue from "../utils/getButtonValue";
import { useState } from "react";

interface ButtonPadProps {
    currentNumber: string;
    fullExpression: string[];
    setCurrentNumber: React.Dispatch<React.SetStateAction<string>>;
    setFullExpression: React.Dispatch<React.SetStateAction<string[]>>;
}

export function ButtonPad({
    currentNumber,
    fullExpression,
    setCurrentNumber,
    setFullExpression,
}: ButtonPadProps): JSX.Element {
    const [writingMode, setWritingMode] = useState<"replace" | "edit">(
        "replace"
    );

    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operators = ["plus", "minus", "multiply", "divide"];
    const squareRootFraction = ["square", "root", "fraction"];

    const handlePercent = () => {
        const treeSoFar = createExpressionTree(
            fullExpression.slice(0, fullExpression.length - 1)
        );
        const resultSoFar =
            fullExpression.length > 2
                ? evaluateExpressionTree(treeSoFar)
                : Number(fullExpression[0]);
        const percentageOfResult = (
            (resultSoFar * Number(currentNumber)) /
            100
        ).toString();
        setCurrentNumber(percentageOfResult);
    };

    const handleClearEntry = () => {
        setCurrentNumber("0");
        setWritingMode("replace");
    };

    const handleClearAll = () => {
        setCurrentNumber("0");
        setFullExpression([]);
        setWritingMode("replace");
    };

    const handleBackspace = () => {
        const currentIsNegative = currentNumber[0] === "-";
        setCurrentNumber((prev) =>
            prev.length === 1 ||
            (prev.length === 2 && currentIsNegative) ||
            prev === "Infinity" // Pressing backspace resets to 0 if you're at 1 character of length or it's Infinity
                ? "0"
                : prev.slice(0, prev.length - 1)
        );
        if (
            currentNumber.length === 1 ||
            (currentNumber.length === 2 && currentIsNegative)
        ) {
            setWritingMode("replace");
        }
    };

    const handleSquareRootFraction = (
        button: "root" | "square" | "fraction"
    ) => {
        const result = evaluateSimpleExpression(
            currentNumber,
            button
        ).toString();
        setCurrentNumber(result);
        setWritingMode("replace");
    };

    const handleOperators = (operatorName: string): void => {
        const operatorSymbol = getButtonValue(operatorName) as Operator;

        const numToPrint =
            currentNumber[0] === "-" ? `(${currentNumber})` : currentNumber;
        setFullExpression((prev) => [...prev, numToPrint, operatorSymbol]);

        setCurrentNumber("0");
        setWritingMode("replace");
    };

    const handleNumbers = (number: string): void => {
        console.log(writingMode);
        setCurrentNumber(
            (prev) =>
                (writingMode === "replace"
                    ? prev[0] === "-"
                        ? "-"
                        : ""
                    : prev) + number // keeps the minus if it's there
        );

        if (writingMode === "replace") {
            setWritingMode("edit");
        }
    };

    const handleNegativeToggle = () => {
        if (currentNumber[0] === "-") {
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
        const expressionTree = createExpressionTree([
            ...fullExpression,
            currentNumber,
        ]);

        const result = evaluateExpressionTree(expressionTree).toString();

        setCurrentNumber(result);
        setFullExpression([]);
        setWritingMode("replace");
    };

    return (
        <div className="btn-pad">
            <OneButton handleButton={handlePercent} id={"percent"} />

            <OneButton handleButton={() => handleClearEntry()} id={"CE"} />

            <OneButton handleButton={() => handleClearAll()} id={"C"} />

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
