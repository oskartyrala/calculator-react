import "./App.css";
import { Display } from "./Display";
import { ButtonPad } from "./ButtonPad";
import { useState } from "react";

function App() {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [fullExpression, setFullExpression] = useState<string[]>([]);

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
            />
        </div>
    );
}

export default App;
