import { configureStore } from "@reduxjs/toolkit";
import keybindsSlice from "./keybinds.slice";

export const store = configureStore({
    reducer: {
        keybinds: keybindsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
