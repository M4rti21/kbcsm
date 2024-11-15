import { useDispatch, useSelector } from "react-redux";
import { deleteCombo } from "../store/keybinds.slice";
import { RootState } from "../store/store";
import { KeyCombo } from "../types/keyboard";
import { KeyDisplay } from "./creator/CurrentComboDisplay";

function ComboTable() {
    const groups = useSelector(
        (state: RootState) => state.keybinds.collection.groups
    );
    return (
        <div className="overflow-x-auto">
            {Object.entries(groups).map(([k, v]) => (
                <div>
                    <h3>{k}</h3>
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead>
                            <tr>
                                <th />
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                                    Keys
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {Object.entries(v).map(([k, combo]) => (
                                <ComboRow key={k} combo={combo} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

function ComboRow(p: { combo: KeyCombo }) {
    const dispatch = useDispatch();

    return (
        <tr>
            <td>
                <button
                    className="rounded-full size-8 border border-red-600 text-indigo-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
                    onClick={() => dispatch(deleteCombo(p.combo.id))}
                >
                    x
                </button>
            </td>
            <td className="font-medium text-gray-900 flex flex-row px-4 py-2 gap-2 flex-wrap">
                {p.combo.mods.map((key, i) => (
                    <KeyDisplay index={i} Okey={key} modifier />
                ))}
                {p.combo.keys.map((key, i) => (
                    <KeyDisplay index={i} Okey={key} />
                ))}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {p.combo.desc}
            </td>
        </tr>
    );
}

export default ComboTable;
