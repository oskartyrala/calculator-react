import getButtonValue from "../utils/getButtonValue";

interface ButtonProps {
    handleButton: () => void;
    id: string;
}

export default function OneButton({
    handleButton,
    id,
}: ButtonProps): JSX.Element {
    const displayValue = getButtonValue(id);

    return (
        <>
            <button onClick={() => handleButton()} id={`btn-${id}`}>
                {displayValue}
            </button>
        </>
    );
}
