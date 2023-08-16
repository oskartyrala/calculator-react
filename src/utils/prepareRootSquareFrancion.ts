export default function prepareRootSquareFraction(
    operation: "root" | "square" | "fraction",
    operand: string
): string {
    const num = Number(operand);
    switch (operation) {
        case "root":
            return `sqrt(${num})`;

        case "square":
            return `${num}²`;

        case "fraction":
            return `1/${num}`;
    }
}
