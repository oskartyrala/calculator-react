import "./App.css";
import { Display } from "./Display";
import { ButtonPad } from "./ButtonPad";
import { useState } from "react";

function App() {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [fullExpression, setFullExpression] = useState<string[]>([]);
    const [writingMode, setWritingMode] = useState<"replace" | "edit">(
        "replace"
    );

    return (
        <div className="calculator">
            <Display
                currentNumber={currentNumber}
                fullExpression={fullExpression}
            />
            <ButtonPad
                currentNumber={currentNumber}
                fullExpression={fullExpression}
                setCurrentNumber={setCurrentNumber}
                setFullExpression={setFullExpression}
                writingMode={writingMode}
                setWritingMode={setWritingMode}
            />
        </div>
    );
}

export default App;
