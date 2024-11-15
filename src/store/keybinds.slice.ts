import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Collection, IKey, KeyCombo } from "../types/keyboard";

type KeybindState = {
    collection: Collection;
    current: KeyCombo | null;
};

const initialState: KeybindState = {
    collection: {
        name: "",
        groups: {},
    },
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
                id: "",
                mods: [],
                keys: [],
                desc: "",
            };
        },
        commitCurrent: (state) => {
            if (!state.current) return;
            const combos = state.collection.groups[""];

            const id =
                state.current.mods.map((k) => k.code).join("") +
                state.current.keys.map((k) => k.code).join("");

            combos[id] = { ...state.current, id };
            state.current = null;
        },
        dismissCurrent: (state) => {
            state.current = null;
        },
        editDesc: (
            state,
            action: PayloadAction<{ id: string; desc: string }>
        ) => {
            state.collection.groups[""][action.payload.id].desc =
                action.payload.desc;
        },
        deleteCombo: (state, action: PayloadAction<string>) => {
            delete state.collection.groups[""][action.payload];
        },
        setCollection: (state, action: PayloadAction<Collection>) => {
            state.collection = action.payload;
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
    editDesc,
    deleteCombo,
    setCollection,
} = keybindsSlice.actions;

export default keybindsSlice.reducer;
