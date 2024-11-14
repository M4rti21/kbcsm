import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IKey, KeyCombo } from "../types/keyboard";

type KeybindState = {
    combos: KeyCombo[];
    current: KeyCombo | null;
};

const initialState: KeybindState = {
    combos: [],
    current: null,
};

export const keybindsSlice = createSlice({
    name: "keybinds",
    initialState,
    reducers: {
        addKey: (
            state,
            action: PayloadAction<{ key: IKey; mod?: boolean }>
        ) => {
            if (!state.current) return;
            const current_combo = state.current;
            if (action.payload.mod) {
                current_combo.mods.push(action.payload.key);
            } else {
                current_combo.keys.push(action.payload.key);
            }
        },
        delKey: (
            state,
            action: PayloadAction<{ index: number; mod?: boolean }>
        ) => {
            if (!state.current) return;
            const current_combo = state.current;
            if (action.payload.mod) {
                current_combo.mods.splice(action.payload.index, 1);
            } else {
                current_combo.keys.splice(action.payload.index, 1);
            }
        },
        setDesc: (state, action: PayloadAction<{ desc: string }>) => {
            if (!state.current) return;
            const current_combo = state.current;
            current_combo.desc = action.payload.desc;
        },
        initCurrent: (state) => {
            state.current = {
                mods: [],
                keys: [],
            };
        },
        commitCurrent: (state) => {
            if (!state.current) return;
            const combos = state.combos;
            combos.push(state.current);
            state.current = null;
        },
        dismissCurrent: (state) => {
            state.current = null;
        },
    },
});

export const {
    addKey,
    delKey,
    setDesc,
    initCurrent,
    commitCurrent,
    dismissCurrent,
} = keybindsSlice.actions;

export default keybindsSlice.reducer;
