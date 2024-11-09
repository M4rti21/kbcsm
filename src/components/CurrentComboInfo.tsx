import { useRef } from "react";
import { useCurrentStore } from "../store/keybinds";

function CurrentComboInfo() {
    const action = useCurrentStore((state) => state.action);
    const setAction = useCurrentStore((state) => state.setAction);

    const nameRef = useRef<HTMLInputElement | null>(null);
    const descRef = useRef<HTMLInputElement | null>(null);

    function handleChange() {
        setAction({
            name: nameRef?.current?.value,
            desc: descRef?.current?.value,
        });
    }

    return (
        <div className="flex flex-row gap-4">
            <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <span className="text-xs font-medium text-gray-700">Name</span>
                <input
                    ref={nameRef}
                    type="text"
                    defaultValue={action?.name}
                    onChange={handleChange}
                    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
            </label>
            <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <span className="text-xs font-medium text-gray-700">
                    Description
                </span>
                <input
                    ref={descRef}
                    type="text"
                    defaultValue={action?.desc}
                    onChange={handleChange}
                    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
            </label>
        </div>
    );
}

export default CurrentComboInfo;
