import { configureStore } from "@reduxjs/toolkit";
import keybindsReducer from "./keybinds.slice";

export const store = configureStore({
    reducer: {
        keybinds: keybindsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
