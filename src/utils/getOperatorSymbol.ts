export default function getOperatorSymbol(key: string): string {
    switch (key) {
        case "plus":
            return "+";

        case "minus":
            return "-";

        case "multiply":
            return "*";

        case "divide":
            return "/";

        default:
            return key;
    }
}
