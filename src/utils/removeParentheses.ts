export default function removeParentheses(str: string): string {
    const negativePattern = /\((.*?)\)/; // This regex pattern captures text between root
    const negativeMatch = str.match(negativePattern);

    if (negativeMatch) {
        const num = Number(negativeMatch[1]);
        return num.toString();
    }

    return str;
}
