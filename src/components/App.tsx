import "./App.css";
import { Display } from "./Display";
import { ButtonPad } from "./ButtonPad";
import { useState } from "react";

function App() {
    const [mainDisplay, setMainDisplay] = useState("0");
    const [secondaryDisplay, setSecondaryDisplay] = useState<string[]>([]);
    const [writingMode, setWritingMode] = useState<"replace" | "edit">(
        "replace"
    );

    return (
        <div className="calculator">
            <Display
                mainDisplay={mainDisplay}
                secondaryDisplay={secondaryDisplay}
            />
            <ButtonPad
                mainDisplay={mainDisplay}
                secondaryDisplay={secondaryDisplay}
                setMainDisplay={setMainDisplay}
                setSecondaryDisplay={setSecondaryDisplay}
                writingMode={writingMode}
                setWritingMode={setWritingMode}
            />
        </div>
    );
}

export default App;
