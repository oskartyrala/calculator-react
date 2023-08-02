interface DisplayProps {
    mainDisplay: string;
    secondaryDisplay: string[];
}

export function Display({
    mainDisplay,
    secondaryDisplay,
}: DisplayProps): JSX.Element {
    return (
        <div className="display">
            <p className="secondaryDisplay">{secondaryDisplay}</p>
            <p className="mainDisplay">{mainDisplay}</p>
        </div>
    );
}
