import "./App.css";
import { Display } from "./Display";
import { ButtonPad } from "./ButtonPad";

function App() {
    return (
        <div className="calculator">
        <Display />
        <ButtonPad />
        </div>
    );
}

export default App;
