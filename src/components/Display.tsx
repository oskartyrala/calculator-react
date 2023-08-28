interface DisplayProps {
    currentNumber: string;
    fullExpression: string[];
}

export function Display({
    currentNumber,
    fullExpression,
}: DisplayProps): JSX.Element {
    return (
        <div className="display">
            <p className="fullExpression">{fullExpression}</p>
            <p className="currentNumber">{currentNumber}</p>
        </div>
    );
}
