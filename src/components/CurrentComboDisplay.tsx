import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useKeybindStore } from "../store/keybinds";
import { IKey } from "../types/keyboard";

function CurrentComboDisplay() {
    const current_combo = useKeybindStore((state) => state.current_combo);
    return (
        <div className="border rounded-lg flex flex-row">
            <div className="p-3 flex flex-col gap-2">
                <span className="text-xs font-medium text-gray-700">Mods</span>
                <div className="flex flex-row gap-2">
                    {current_combo?.mods.map((key, i) => (
                        <KeyDisplay
                            key={i}
                            index={i}
                            Okey={key}
                            modifier
                            editable
                        />
                    ))}
                </div>
            </div>
            <span className="w-px flex-1 bg-gray-200" />
            <div className="p-3 flex flex-col gap-2">
                <span className="text-xs font-medium text-gray-700">Keys</span>
                <div className="flex flex-row gap-2">
                    {current_combo?.keys.map((key, i) => (
                        <KeyDisplay key={i} index={i} Okey={key} editable />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function KeyDisplay(p: {
    index: number;
    Okey: IKey;
    modifier?: boolean;
    editable?: boolean;
}) {
    const delKey = useKeybindStore((state) => state.delKey);

    function handleClick() {
        if (!p.editable) return;
        delKey(p.index, p.modifier);
    }

    return (
        <button
            className={`group relative rounded-lg border h-12 min-w-12 p-2 ${p.modifier ? "bg-indigo-300" : "bg-pink-300"}`}
            data-tooltip-id="tooltip"
            data-tooltip-content={p.Okey.desc}
            onClick={handleClick}
        >
            {p.editable ? (
                <span className="hidden group-hover:flex absolute -right-2 -top-2 items-center justify-center text-gray-900 size-4 rounded-full bg-red-400">
                    <FontAwesomeIcon icon={faXmark} size="xs" />
                </span>
            ) : null}
            {p.Okey.glyph}
        </button>
    );
}

export default CurrentComboDisplay;
