export default function isExpression(str: string): boolean {
    console.log(`checking if ${str} is an expression`);
    const result =
        str.includes("*") ||
        str.includes("/") ||
        str.includes("+") ||
        str.includes("-");
    console.log(`with result ${result}`);
    return result;
}
