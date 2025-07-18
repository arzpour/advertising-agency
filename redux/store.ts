import { configureStore } from "@reduxjs/toolkit";
import { adminPanelReducer } from "./features/admin.slice";

export const store = configureStore({
  reducer: {
    admin: adminPanelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
