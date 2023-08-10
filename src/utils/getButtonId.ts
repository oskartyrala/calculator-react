export default function getButtonId(key: string): string {
    switch (key) {
        case "&":
            return "ampersand";

        case "±":
            return "plusminus";

        case ".":
            return "decimal";

        case "+":
            return "plus";

        case "-":
            return "minus";

        case "*":
            return "multiply";

        case "/":
            return "divide";

        case "x^2":
            return "square";

        case "√":
            return "root";

        case "1/x":
            return "fraction";

        case "=":
            return "equals";

        case "<":
            return "backspace";

        default:
            return key;
    }
}
