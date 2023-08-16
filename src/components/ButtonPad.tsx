import getButtonValue from "../utils/getButtonValue";
import OneButton from "./OneButton";
import isOperator from "../utils/isOperator";
// import evaluateExpression from "../utils/evaluateExpression";
import getOperatorSymbol from "../utils/getOperatorSymbol";
import createExpressionTree from "../utils/createExpressionTree";
import evaluateExpressionTree from "../utils/evaluateExpressionTree";
// import evaluateSimpleExpression from "../utils/evaluateSimpleExpression";
import prepareRootSquareFraction from "../utils/prepareRootSquareFrancion";
import cleanUpNum from "../utils/cleanUpNum";

interface ButtonPadProps {
    mainDisplay: string;
    secondaryDisplay: string[];
    setMainDisplay: React.Dispatch<React.SetStateAction<string>>;
    setSecondaryDisplay: React.Dispatch<React.SetStateAction<string[]>>;
    writingMode: "replace" | "edit";
    setWritingMode: React.Dispatch<React.SetStateAction<"replace" | "edit">>;
}

export function ButtonPad({
    mainDisplay,
    secondaryDisplay,
    setMainDisplay,
    setSecondaryDisplay,
    writingMode,
    setWritingMode,
}: ButtonPadProps): JSX.Element {
    const buttons = ["ampersand", "plusminus"];
    const numberButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operatorButtons = ["plus", "minus", "multiply", "divide"];
    const resultButtons = ["square", "root", "fraction"];

    /*
        Scenario 1:
            secondary: -
            main: 5
            pressing operator: pushes main + operator to secondary

        Scenario 2:
            secondary: 5+
            main: 0
            pressing operator: replaces operator in secondary

        Scenario 3:
            secondary: 5-
            main: 0
            pressing operator: replaces operator in secondary

        Scenario 4:
            secondary: 5-
            main: 3
            pressing operator: pushes main + operator to secondary
    */

    const handleOperators = (operator: string): void => {
        const operatorSymbol = getOperatorSymbol(operator);
        const lastItem = secondaryDisplay[secondaryDisplay.length - 1];
        if (isOperator(lastItem) && mainDisplay === "0") {
            const withoutLast = secondaryDisplay.slice(
                0,
                secondaryDisplay.length - 1
            );
            setSecondaryDisplay([...withoutLast, operatorSymbol]);
        } else {
            const currentNum = cleanUpNum(mainDisplay);
            setSecondaryDisplay((prev) => [
                ...prev,
                currentNum,
                operatorSymbol,
            ]);
        }
        setMainDisplay("0");
        setWritingMode("replace");
    };

    const handleEvaluate = (): void => {
        const currentNum = cleanUpNum(mainDisplay);
        const expressionTree = createExpressionTree(
            [...secondaryDisplay, currentNum].join("")
        );
        // const result = evaluateExpression([
        //     ...secondaryDisplay,
        //     mainDisplay,
        // ]).toString();
        const result = evaluateExpressionTree(expressionTree).toString();
        setMainDisplay(result);
        setSecondaryDisplay([]);
        setWritingMode("replace");
    };

    const handleNumbers = (button: string): void => {
        setMainDisplay(
            (prev) =>
                (writingMode === "replace" ? "" : prev) + getButtonValue(button)
        );

        if (writingMode === "replace") {
            setWritingMode("edit");
        }
    };

    const handleDecimal = (): void => {
        if (!mainDisplay.includes(".")) {
            setMainDisplay(
                (prev) => `${writingMode === "replace" ? "0" : prev}.`
            );
        }

        if (writingMode === "replace") {
            setWritingMode("edit");
        }
    };

    const handleClearEntry = () => {
        setMainDisplay("0");
        setWritingMode("replace");
    };

    const handleClear = () => {
        setMainDisplay("0");
        setSecondaryDisplay([]);
        setWritingMode("replace");
    };

    const handleBackspace = () => {
        setMainDisplay((prev) =>
            prev.length > 1 ? prev.slice(0, prev.length - 1) : "0"
        );
        if (mainDisplay.length === 1) {
            setWritingMode("replace");
        }
    };

    const handleInstantResult = (button: "root" | "square" | "fraction") => {
        // const expressionStr = `${button}(${mainDisplay})`
        // setMainDisplay(prev => evaluateSimpleExpression(prev, button).toString());
        const expression = prepareRootSquareFraction(button, mainDisplay);
        setMainDisplay(expression);
        setWritingMode("replace");

        // setSecondaryDisplay((prev) => [
        //     ...prev,
        //     expressionStr
        // ]);
    };

    return (
        <div className="btn-pad">
            {buttons.map((button) => (
                <OneButton
                    handleButton={() => setMainDisplay((prev) => prev)}
                    key={button}
                    id={button}
                />
            ))}

            <OneButton handleButton={() => handleClearEntry()} id={"CE"} />

            <OneButton handleButton={() => handleClear()} id={"C"} />

            <OneButton handleButton={() => handleDecimal()} id={"decimal"} />

            <OneButton handleButton={() => handleEvaluate()} id={"equals"} />

            <OneButton
                handleButton={() => handleBackspace()}
                id={"backspace"}
            />

            {resultButtons.map((button) => (
                <OneButton
                    handleButton={() =>
                        handleInstantResult(
                            button as "root" | "square" | "fraction"
                        )
                    }
                    key={button}
                    id={button}
                />
            ))}

            {operatorButtons.map((button) => {
                return (
                    <OneButton
                        handleButton={() => handleOperators(button)}
                        key={button}
                        id={button}
                    />
                );
            })}

            {numberButtons.map((button) => (
                <OneButton
                    handleButton={() =>
                        // setMainDisplay(
                        //     (prev) =>
                        //         (prev === "0" ? "" : prev) +
                        //         getButtonValue(button)
                        // )
                        handleNumbers(button)
                    }
                    key={button}
                    id={button}
                />
            ))}
        </div>
    );
}
