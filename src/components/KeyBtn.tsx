import { useCurrentStore } from "../store/keybinds";
import { IKey } from "../types/keyboard";

export const KeyBtn = (p: {
    Okey: IKey;
    width?: number;
    height?: number;
    modifier?: boolean;
}) => {
    const combo = useCurrentStore((state) => state.combo);
    const setCombo = useCurrentStore((state) => state.setCombo);

    function handleOnClick() {
        if (p.modifier) {
            addModifier();
        } else {
            addKey();
        }
    }

    function addModifier() {
        if (!combo) return;
        const modifiers = combo.modifiers;
        modifiers.push(p.Okey);
        setCombo({ ...combo, modifiers });
    }

    function addKey() {
        if (!combo) return;
        const keys = combo.keys;
        keys.push(p.Okey);
        setCombo({ ...combo, keys });
    }

    return (
        <button
            className="m-0 cursor-pointer select-none rounded-sm border border-base-content bg-opacity-75 p-0 text-center has-[:disabled]:cursor-default has-[:checked]:bg-secondary"
            style={{
                fontSize: "0.5rem",
                width: `${p.width || 1}rem`,
                height: `${p.height || 1}rem`,
                lineHeight: `${p.height || 1}rem`,
            }}
            onClick={handleOnClick}
        >
            {p.Okey.glyph}
        </button>
    );
};

export const Empty = () => <div className="size-4" />;
