import { create } from "zustand";
import { ActionInfo, KeyCombo } from "../types/keyboard";

interface KeybindsState {
    actions: Map<string, ActionInfo>;
    combos: Map<string, KeyCombo>;
    setAction: (action: ActionInfo) => void;
    setCombo: (combo: KeyCombo) => void;
}

export const useKeybindsStore = create<KeybindsState>()((set) => ({
    actions: new Map(),
    combos: new Map(),
    setAction: (action) => {},
    setCombo: (combo) => {},
}));

interface CurrentKeybindState {
    combo: KeyCombo | null;
    action: ActionInfo | null;
    setAction: (combo: ActionInfo | null) => void;
    setCombo: (combo: KeyCombo | null) => void;
    commitCurrent: () => void;
    dismissCurrent: () => void;
}

export const useCurrentStore = create<CurrentKeybindState>()((set) => ({
    combo: null,
    action: null,
    setAction: (action) => set((state) => ({ ...state, action: action })),
    setCombo: (combo) => set((state) => ({ ...state, combo: combo })),
    commitCurrent: () => {},
    dismissCurrent: () => ({ combo: null, action: null }),
}));
