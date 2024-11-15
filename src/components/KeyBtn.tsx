import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addKey } from "../store/keybinds.slice";
import { IKey } from "../types/keyboard";

export const KeyBtn = (p: {
    keyD: IKey;
    width?: number;
    height?: number;
    modifier?: boolean;
    scale?: number;
}) => {
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const dispatch = useDispatch();

    function handleOnClick() {
        btnRef.current?.classList.add("clicked");
        setTimeout(() => {
            btnRef.current?.classList.remove("clicked");
        }, 100);
        dispatch(addKey({ key: p.keyD, mod: p.modifier }));
    }

    return (
        <button
            className="m-0 cursor-pointer select-none rounded-sm border border-base-content bg-opacity-75 p-0 text-center has-[:disabled]:cursor-default has-[:checked]:bg-secondary"
            style={{
                fontSize: `${0.5 * (p.scale || 1)}rem`,
                width: `${(p.width || 1) * (p.scale || 1)}rem`,
                height: `${(p.height || 1) * (p.scale || 1)}rem`,
                lineHeight: `${(p.height || 1) * (p.scale || 1)}rem`,
            }}
            ref={btnRef}
            onClick={handleOnClick}
        >
            {p.keyD.glyph}
        </button>
    );
};

export const Empty = (p: { scale: number }) => (
    <div
        style={{
            width: `${1 * (p.scale || 1)}rem`,
            height: `${1 * (p.scale || 1)}rem`,
        }}
    />
);
