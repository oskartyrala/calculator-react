export default function removeParentheses(str: string): string {
    const parenthesesPattern = /\((.*?)\)/; // This regex pattern captures text between parentheses
    const parenthesesMatch = str.match(parenthesesPattern);

    return parenthesesMatch ? parenthesesMatch[1] : str;
}
