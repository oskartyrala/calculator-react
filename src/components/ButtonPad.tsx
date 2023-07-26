export function ButtonPad(): JSX.Element {
    const buttons = [
        "&",
        "C",
        "CE",
        "<",
        "^2",
        "√",
        "1/x",
        "/",
        1,
        2,
        3,
        "*",
        4,
        5,
        6,
        "-",
        7,
        8,
        9,
        "+",
        "±",
        0,
        ".",
        "=",
    ];
    return (
        <div className="btn-pad">
            {buttons.map((button) => (
                <button key={button}>{button}</button>
            ))}
        </div>
    );
}
