import isOperator from "../utils/isOperator";
import toFixedIfNecessary from "../utils/toFixedIfNecessary";
import removeParentheses from "../utils/removeParentheses";

interface DisplayProps {
    currentNumber: string;
    fullExpression: string[];
}

export function Display({
    currentNumber,
    fullExpression,
}: DisplayProps): JSX.Element {
    const fullFixed = fullExpression.map((item) => {
        if (!isOperator(item)) {
            return toFixedIfNecessary(Number(removeParentheses(item)), 3);
        }
        return item;
    });

    return (
        <div className="display">
            <p className="fullExpression">{fullFixed}</p>
            <p className="currentNumber">{currentNumber}</p>
        </div>
    );
}
