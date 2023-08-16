import evaluateExpressionTree from "./evaluateExpressionTree";
import createExpressionTree, { ExpressionTree } from "./createExpressionTree";

test.skip("evaluate simple trees", () => {
    const simpleAddition: ExpressionTree = {
        operator: "+",
        a: "1",
        b: "3",
    };

    const simpleSubtraction: ExpressionTree = {
        operator: "-",
        a: "20",
        b: "18",
    };

    const simpleMultiplication: ExpressionTree = {
        operator: "*",
        a: "3",
        b: "5",
    };

    const simpleDivision: ExpressionTree = {
        operator: "/",
        a: "15",
        b: "3",
    };
    expect(evaluateExpressionTree(simpleAddition)).toBe(4);
    expect(evaluateExpressionTree(simpleSubtraction)).toBe(2);
    expect(evaluateExpressionTree(simpleMultiplication)).toBe(15);
    expect(evaluateExpressionTree(simpleDivision)).toBe(5);
});

test.skip("Evaluates complex trees with nested expressions", () => {
    const leftTree: ExpressionTree = {
        operator: "+",
        a: "1",
        b: "3",
    };

    const rightRightTree: ExpressionTree = {
        operator: "-",
        a: "20",
        b: "18",
    };

    const rightTree: ExpressionTree = {
        operator: "-",
        a: "7",
        b: rightRightTree,
    };

    const topTree: ExpressionTree = {
        operator: "*",
        a: leftTree,
        b: rightTree,
    };

    expect(evaluateExpressionTree(topTree)).toBe(20);
});

test("Works with a tree built with createExpressionTree", () => {
    const tree = createExpressionTree("3*12/3/3-15*8/2-3+25*8/5");
    expect(evaluateExpressionTree(tree)).toBe(-19);
});
