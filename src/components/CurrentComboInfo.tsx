import { useRef } from "react";
import { useKeybindStore } from "../store/keybinds";

function CurrentComboInfo() {
    const current_combo = useKeybindStore((state) => state.current_combo);
    const setAction = useKeybindStore((state) => state.setAction);

    const ref = useRef<HTMLInputElement | null>(null);

    function handleChange() {
        setAction(ref.current?.value);
    }

    return (
        <div className="flex flex-row gap-4">
            <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <span className="text-xs font-medium text-gray-700">
                    Description
                </span>
                <input
                    ref={ref}
                    type="text"
                    defaultValue={current_combo?.desc}
                    onChange={handleChange}
                    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
            </label>
        </div>
    );
}

export default CurrentComboInfo;
