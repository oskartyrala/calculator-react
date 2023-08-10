export default function getButtonValue(key: string): string | JSX.Element {
    switch (key) {
        case "ampersand":
            return "&";

        case "plusminus":
            return "±";

        case "decimal":
            return ".";

        case "plus":
            return "+";

        case "minus":
            return "-";

        case "multiply":
            return "*";

        case "divide":
            return "/";

        case "root":
            return "√";

        case "equals":
            return "=";

        case "backspace":
            return "<";

        case "fraction":
            return (
                <>
                    <sup>1</sup>&frasl;<sub>x</sub>
                </>
            );

        case "square":
            return (
                <>
                    x<sup>2</sup>
                </>
            );

        default:
            return key;
    }
}
