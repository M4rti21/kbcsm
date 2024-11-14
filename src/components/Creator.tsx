import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    commitCurrent,
    dismissCurrent,
    initCurrent,
    setCombos,
} from "../store/keybinds.slice";
import { RootState } from "../store/store";
import ComboTable from "./ComboTable";
import CurrentComboDisplay from "./creator/CurrentComboDisplay";
import CurrentComboInfo from "./creator/CurrentComboInfo";
import KeyboardDisplay from "./KeyboardDisplay";

function Creator() {
    const combos = useSelector((state: RootState) => state.keybinds.combos);
    const current = useSelector((state: RootState) => state.keybinds.current);

    const dispatch = useDispatch();

    let fileReader: FileReader;

    function exportCombos() {
        const fileName = "my-file";
        const json = JSON.stringify(combos, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const href = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    }

    function importCombos(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target?.files?.[0];
        if (!file) return;
        fileReader = new FileReader();
        fileReader.onloadend = function () {
            const content = this.result;
            if (typeof content === "string") {
                dispatch(setCombos(JSON.parse(content)));
            }
        };
        fileReader.readAsText(file);
    }

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <KeyboardDisplay scale={2} />
            {!current ? (
                <div className="flex flex-row gap-4">
                    <label className="inline-flex items-center gap-2 rounded border border-yellow-600 bg-yellow-600 px-8 py-3 text-white hover:bg-transparent hover:text-yellow-600 focus:outline-none focus:ring active:text-yellow-500">
                        Import
                        <input
                            type="file"
                            id="file"
                            className="input-file"
                            accept=".json"
                            onChange={importCombos}
                        />
                    </label>
                    <button
                        className="inline-flex items-center gap-2 rounded border border-blue-600 bg-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        onClick={exportCombos}
                    >
                        Export
                    </button>
                    <button
                        className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        onClick={() => dispatch(initCurrent())}
                    >
                        Create new keybind
                    </button>
                </div>
            ) : (
                <>
                    <CurrentComboDisplay />
                    <CurrentComboInfo />
                    <div className="flex flex-row gap-4">
                        <button
                            className="inline-block rounded border border-red-600 px-12 py-3 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
                            onClick={() => dispatch(dismissCurrent())}
                        >
                            Cancel
                        </button>
                        <button
                            className="inline-block rounded border border-green-600 px-12 py-3 text-sm font-medium text-green-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring active:bg-green-500"
                            onClick={() => dispatch(commitCurrent())}
                        >
                            Save
                        </button>
                    </div>
                </>
            )}
            <ComboTable />
        </div>
    );
}

export default Creator;
