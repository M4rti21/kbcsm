import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { KeyDisplay } from "./CurrentComboDisplay";

function ComboTable() {
    const combos = useSelector((state: RootState) => state.keybinds.combos);
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead>
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                            Keys
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                            Desc
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {Array.from(combos.entries()).map(([k, combo]) => (
                        <tr key={k}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex flex-row gap-2">
                                {combo.mods.map((key, i) => (
                                    <KeyDisplay
                                        key={key.code}
                                        index={i}
                                        Okey={key}
                                        modifier
                                    />
                                ))}
                                {combo.keys.map((key, i) => (
                                    <KeyDisplay
                                        key={key.code}
                                        index={i}
                                        Okey={key}
                                    />
                                ))}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {combo.desc}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ComboTable;
