import { Tooltip } from "react-tooltip";
import EditorDisplay from "./components/EditorDisplay";

function App() {
    return (
        <main>
            <Tooltip id="tooltip" className="z-50" />
            <div className="w-screen h-screen flex flex-col gap-8 items-center justify-center">
                <EditorDisplay />
            </div>
        </main>
    );
}

export default App;
