import "./App.css";
import { Display } from "./Display";
import { ButtonPad } from "./ButtonPad";
import { useState } from "react";

function App() {
    const [mainDisplay, setMainDisplay] = useState("0");
    const [secondaryDisplay, setSecondaryDisplay] = useState<string[]>([]);

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
            />
        </div>
    );
}

export default App;
