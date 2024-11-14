import { useDispatch, useSelector } from "react-redux";
import {
    commitCurrent,
    dismissCurrent,
    initCurrent,
} from "../store/keybinds.slice";
import { RootState } from "../store/store";
import ComboTable from "./ComboTable";
import CurrentComboDisplay from "./CurrentComboDisplay";
import CurrentComboInfo from "./CurrentComboInfo";
import KeyboardDisplay from "./KeyboardDisplay";

function EditorDisplay() {
    const current = useSelector((state: RootState) => state.keybinds.current);

    const dispatch = useDispatch();

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <KeyboardDisplay />
            {!current ? (
                <button
                    className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    onClick={() => dispatch(initCurrent())}
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

export default EditorDisplay;
