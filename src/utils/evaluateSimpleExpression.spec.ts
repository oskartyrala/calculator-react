import evaluateSimpleExpression from "./evaluateSimpleExpression";

test("correctly adds two numbers", () => {
    expect(evaluateSimpleExpression("3", "+", "4")).toBe(7);
});

test("correctly subtracts one number from another", () => {
    expect(evaluateSimpleExpression("13", "-", "7")).toBe(6);
});

test("correctly multiplies two numbers", () => {
    expect(evaluateSimpleExpression("3", "*", "4")).toBe(12);
});

test("correctly divides one number by another", () => {
    expect(evaluateSimpleExpression("15", "/", "5")).toBe(3);
});
