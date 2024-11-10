import { create } from "zustand";
import { IKey, KeyCombo } from "../types/keyboard";

type KeybindState = {
    combos: KeyCombo[];
    current_combo: KeyCombo | null;
    addKey: (key: IKey, modifier?: boolean) => void;
    delKey: (index: number, modifier?: boolean) => void;
    setAction: (action?: string) => void;
    setCombos: (combos: KeyCombo[]) => void;
    initCurrent: () => void;
    commitCurrent: () => void;
    dismissCurrent: () => void;
};

export const useKeybindStore = create<KeybindState>()((set) => ({
    combos: [],
    current_combo: null,
    addKey: (key, modifier) =>
        set((state) => {
            if (!state.current_combo) return state;
            const current_combo = state.current_combo;
            if (modifier) {
                current_combo.mods.push(key);
            } else {
                current_combo.keys.push(key);
            }
            return state;
        }),
    delKey: (index, modifier) =>
        set((state) => {
            if (!state.current_combo) return state;
            const current_combo = state.current_combo;
            if (modifier) {
                current_combo.mods.splice(index, 1);
            } else {
                current_combo.keys.splice(index, 1);
            }
            return state;
        }),
    setAction: (action) =>
        set((state) => {
            if (!state.current_combo) return state;
            const current_combo = state.current_combo;
            current_combo.desc = action;
            return { ...state, current_combo };
        }),
    setCombos: (combos) => set((state) => ({ ...state, combos })),
    initCurrent: () =>
        set((state) => ({
            ...state,
            current_combo: {
                mods: [],
                keys: [],
            },
        })),
    commitCurrent: () =>
        set((state) => {
            if (!state.current_combo) return state;
            const combos = state.combos;
            combos.push(state.current_combo);
            return { ...state, combos, current_combo: null };
        }),
    dismissCurrent: () => set((state) => ({ ...state, current_combo: null })),
}));
