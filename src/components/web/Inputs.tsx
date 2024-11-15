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
    label: string;
    color?: Color;
    onClick?: () => void;
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

export function Input(p: {
    id?: string;
    type: string;
    label: string;
    value: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <span className="text-xs font-medium text-gray-700">{p.label}</span>
            <input
                type={p.type}
                id={p.id}
                value={p.value}
                placeholder={p.placeholder}
                onChange={p.onChange}
                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
        </label>
    );
}

export function FileInput(p: {
    label: string;
    color?: Color;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
