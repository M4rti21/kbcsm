import { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import ComboTable from "./components/ComboTable";
import CurrentComboDisplay from "./components/CurrentComboDisplay";
import CurrentComboInfo from "./components/CurrentComboInfo";
import Keyboard from "./components/KeyboardDisplay";
import { useKeybindStore } from "./store/keybinds";

function App() {
    const current_combo = useKeybindStore((state) => state.current_combo);
    const initCurrent = useKeybindStore((state) => state.initCurrent);
    const dismissCurrent = useKeybindStore((state) => state.dismissCurrent);
    const commitCurrent = useKeybindStore((state) => state.commitCurrent);

    useEffect(() => {
        console.log(current_combo);
    }, [current_combo]);

    return (
        <>
            <Tooltip id="tooltip" className="z-50" />
            <div className="w-screen h-screen flex flex-col gap-8 items-center justify-center">
                <Keyboard />
                {!current_combo ? (
                    <button
                        className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        onClick={initCurrent}
                    >
                        Create new keybind
                    </button>
                ) : (
                    <>
                        <CurrentComboDisplay />
                        <CurrentComboInfo />
                        <div className="flex flex-row gap-4">
                            <button
                                className="inline-block rounded border border-red-600 px-12 py-3 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
                                onClick={dismissCurrent}
                            >
                                Cancel
                            </button>
                            <button
                                className="inline-block rounded border border-green-600 px-12 py-3 text-sm font-medium text-green-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring active:bg-green-500"
                                onClick={commitCurrent}
                            >
                                Save
                            </button>
                        </div>
                    </>
                )}
                <ComboTable />
            </div>
        </>
    );
}

export default App;
