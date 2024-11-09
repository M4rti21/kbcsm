import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCurrentStore } from "../store/keybinds";
import { IKey } from "../types/keyboard";

function CurrentComboDisplay() {
    const combo = useCurrentStore((state) => state.combo);
    return (
        <div className="border rounded-lg flex flex-row">
            <div className="p-3 flex flex-col gap-2">
                <span className="text-xs font-medium text-gray-700">Mods</span>
                <div className="flex flex-row gap-2">
                    {combo?.modifiers.map((key, i) => (
                        <KeyDisplay key={i} index={i} Okey={key} modifier />
                    ))}
                </div>
            </div>
            <span className="w-px flex-1 bg-gray-200" />
            <div className="p-3 flex flex-col gap-2">
                <span className="text-xs font-medium text-gray-700">Keys</span>
                <div className="flex flex-row gap-2">
                    {combo?.keys.map((key, i) => (
                        <KeyDisplay key={i} index={i} Okey={key} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function KeyDisplay(p: { index: number; Okey: IKey; modifier?: boolean }) {
    const combo = useCurrentStore((state) => state.combo);
    const setCombo = useCurrentStore((state) => state.setCombo);

    function handleClick() {
        if (p.modifier) {
            removeModifier();
        } else {
            removeKey();
        }
    }

    function removeModifier() {
        if (!combo) return;
        let modifiers = combo.modifiers;
        modifiers.splice(p.index, 1);
        setCombo({ ...combo, modifiers });
    }

    function removeKey() {
        if (!combo) return;
        let keys = combo.keys;
        keys.splice(p.index, 1);
        setCombo({ ...combo, keys });
    }

    return (
        <button
            className="group relative rounded-lg border h-12 min-w-12 p-2"
            data-tooltip-id="tooltip"
            data-tooltip-content={p.Okey.desc}
            onClick={handleClick}
        >
            <span className="hidden group-hover:flex absolute -right-2 -top-2 items-center justify-center text-gray-900 size-4 rounded-full bg-red-400">
                <FontAwesomeIcon icon={faXmark} size="xs" />
            </span>
            {p.Okey.glyph}
        </button>
    );
}

export default CurrentComboDisplay;
