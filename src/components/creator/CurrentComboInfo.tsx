import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDesc } from "../../store/keybinds.slice";
import { RootState } from "../../store/store";

function CurrentComboInfo() {
    const current = useSelector((state: RootState) => state.keybinds.current);
    const ref = useRef<HTMLInputElement | null>(null);

    const dispatch = useDispatch();

    function handleChange() {
        dispatch(setDesc({ desc: ref.current?.value || "" }));
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
                    defaultValue={current?.desc}
                    onChange={handleChange}
                    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
            </label>
        </div>
    );
}

export default CurrentComboInfo;
