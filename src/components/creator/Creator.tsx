import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    commitCurrent,
    dismissCurrent,
    initCurrent,
    setCombos,
} from "../../store/keybinds.slice";
import { RootState } from "../../store/store";
import ComboTable from "../ComboTable";
import CurrentComboDisplay from "./CurrentComboDisplay";
import CurrentComboInfo from "./CurrentComboInfo";
import KeyboardDisplay from "../KeyboardDisplay";
import Button, { FileInput } from "../web/Inputs";

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

    if (!current) {
        return (
            <div className="flex flex-row gap-4">
                <FileInput label="Import" onChange={importCombos} />
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
