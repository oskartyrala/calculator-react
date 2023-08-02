import getButtonValue from "../utils/getButtonValue";
import OneButton from "./OneButton";
import isOperator from "../utils/isOperator";
import evaluateExpression from "../utils/evaluateExpression";
import getOperatorSymbol from "../utils/getOperatorSymbol";

interface ButtonPadProps {
    mainDisplay: string;
    secondaryDisplay: string[];
    setMainDisplay: React.Dispatch<React.SetStateAction<string>>;
    setSecondaryDisplay: React.Dispatch<React.SetStateAction<string[]>>;
}

export function ButtonPad({
    mainDisplay,
    secondaryDisplay,
    setMainDisplay,
    setSecondaryDisplay,
}: ButtonPadProps): JSX.Element {
    const buttons = ["ampersand", "C", "plusminus"];
    const numberButtons = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "decimal",
    ];
    const operatorButtons = ["plus", "minus", "multiply", "divide"];
    const resultButtons = ["square", "root", "fraction", "equals"];

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
            setSecondaryDisplay((prev) => [
                ...prev,
                mainDisplay,
                operatorSymbol,
            ]);
        }
        setMainDisplay("0");
    };

    const handleEvaluate = (): void => {
        const result = evaluateExpression([
            ...secondaryDisplay,
            mainDisplay,
        ]).toString();
        setMainDisplay(result);
        setSecondaryDisplay([]);
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

            <OneButton handleButton={() => setMainDisplay("0")} id={"CE"} />

            <OneButton
                handleButton={() =>
                    setMainDisplay((prev) =>
                        prev.length > 1 ? prev.slice(0, prev.length - 1) : "0"
                    )
                }
                id={"backspace"}
            />

            {resultButtons.map((button) => (
                <OneButton
                    handleButton={() => handleEvaluate()}
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
                        setMainDisplay(
                            (prev) =>
                                (prev === "0" ? "" : prev) +
                                getButtonValue(button)
                        )
                    }
                    key={button}
                    id={button}
                />
            ))}
        </div>
    );
}
