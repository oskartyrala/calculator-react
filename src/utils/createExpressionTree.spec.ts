import createExpressionTree from "./createExpressionTree";

test("Creates a simple tree", () => {
    expect(createExpressionTree(["25", "/", "5"])).toEqual({
        a: "25",
        b: "5",
        operator: "/",
    });
});

test("Creates a complex tree", () => {
    expect(createExpressionTree(["3", "+", "25", "/", "5"])).toEqual({
        a: "3",
        b: { a: "25", b: "5", operator: "/" },
        operator: "+",
    });
    expect(
        createExpressionTree([
            "3",
            "-",
            "15",
            "*",
            "8",
            "-",
            "3",
            "+",
            "25",
            "/",
            "5",
        ])
    ).toEqual({
        a: {
            a: {
                a: "3",
                b: {
                    a: "15",
                    b: "8",
                    operator: "*",
                },
                operator: "-",
            },
            b: "3",
            operator: "-",
        },
        b: {
            a: "25",
            b: "5",
            operator: "/",
        },
        operator: "+",
    });
});
