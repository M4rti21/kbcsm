import { useDispatch, useSelector } from "react-redux";
import {
    commitCurrent,
    dismissCurrent,
    initCurrent,
} from "../../store/keybinds.slice";
import { RootState } from "../../store/store";
import ComboTable from "../ComboTable";
import CurrentComboDisplay from "./CurrentComboDisplay";
import CurrentComboInfo from "./CurrentComboInfo";
import KeyboardDisplay from "../KeyboardDisplay";
import { Button } from "../web/Inputs";

function Creator() {
    const collection = useSelector(
        (state: RootState) => state.keybinds.collection
    );
    const current = useSelector((state: RootState) => state.keybinds.current);

    const dispatch = useDispatch();

    function exportCombos() {
        const fileName = "my-file";
        const json = JSON.stringify(collection, null, 2);
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

    if (!current) {
        return (
            <div className="flex flex-row gap-4">
                <Button label="Export " onClick={exportCombos} />
                <Button
                    label="New Keybind"
                    onClick={() => dispatch(initCurrent())}
                />
            </div>
        );
    }

    return (
        <>
            <KeyboardDisplay scale={2} />
            <CurrentComboDisplay />
            <CurrentComboInfo />
            <div className="flex flex-row gap-4">
                <Button
                    label="Cancel"
                    onClick={() => dispatch(dismissCurrent())}
                />
                <Button
                    label="Save"
                    onClick={() => dispatch(commitCurrent())}
                />
            </div>
            <ComboTable />
        </>
    );
}

export default Creator;
