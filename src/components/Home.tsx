import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setCollection } from "../store/keybinds.slice";
import { Button, FileInput, Input } from "./web/Inputs";

function Home() {
    const dispatch = useDispatch();

    let fileReader: FileReader;

    const [visible, setVisible] = useState(false);
    const [newName, setNewName] = useState("");

    function importCombos(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target?.files?.[0];
        if (!file) return;
        fileReader = new FileReader();
        fileReader.onloadend = function () {
            const content = this.result;
            if (typeof content === "string") {
                dispatch(setCollection(JSON.parse(content)));
            }
        };
        fileReader.readAsText(file);
    }

    function toggleNewCollection() {
        setVisible((prev) => !prev);
    }

    function handleNewChange(e: ChangeEvent<HTMLInputElement>) {
        setNewName(e.target.value);
    }

    return (
        <>
            <FileInput label="Import" onChange={importCombos} />
            <Button label="New Collection" onClick={toggleNewCollection} />
            {visible ? (
                <form>
                    <Input
                        type="text"
                        label="Name"
                        value={newName}
                        onChange={handleNewChange}
                    />
                </form>
            ) : null}
        </>
    );
}

export default Home;
