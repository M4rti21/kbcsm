import { ChangeEvent } from "react";

export enum Color {
    primary,
    secondary,
    success,
    warning,
    error,
    info,
}

export function Button(p: {
    onClick?: () => void;
    label: string;
    color?: Color;
}) {
    return (
        <button
            onClick={p.onClick}
            className={`cursor-pointer inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500`}
        >
            {p.label}
        </button>
    );
}

export function FileInput(p: {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    color?: Color;
}) {
    return (
        <label
            className={`cursor-pointer inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500`}
        >
            <span>{p.label}</span>
            <input
                type="file"
                id="file"
                className="hidden"
                accept=".json"
                onChange={p.onChange}
            />
        </label>
    );
}

export default Button;
