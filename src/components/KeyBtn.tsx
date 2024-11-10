import { useRef } from "react";
import { useKeybindStore } from "../store/keybinds";
import { IKey } from "../types/keyboard";

export const KeyBtn = (p: {
    Okey: IKey;
    width?: number;
    height?: number;
    modifier?: boolean;
}) => {
    const addKey = useKeybindStore((state) => state.addKey);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    function handleOnClick() {
        btnRef.current?.classList.add("clicked");
        setTimeout(() => {
            btnRef.current?.classList.remove("clicked");
        }, 100);
        addKey(p.Okey, p.modifier);
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
            ref={btnRef}
            onClick={handleOnClick}
        >
            {p.Okey.glyph}
        </button>
    );
};

export const Empty = () => <div className="size-4" />;
