import evaluateTwoNumbers from "./evaluateTwoNumbers";

test("correctly adds two numbers", () => {
    expect(evaluateTwoNumbers("3", "4", "+")).toBe(7);
});

test("correctly subtracts one number from another", () => {
    expect(evaluateTwoNumbers("13", "7", "-")).toBe(6);
});

test("correctly multiplies two numbers", () => {
    expect(evaluateTwoNumbers("3", "4", "*")).toBe(12);
});

test("correctly divides one number by another", () => {
    expect(evaluateTwoNumbers("15", "5", "/")).toBe(3);
});
