import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type adminPanelTabType = "tickets" | "projects" | "blogs" | "adminInfo" | "";

interface AdminPanelState {
  adminPanelTab: adminPanelTabType;
}

const initialState: AdminPanelState = {
  adminPanelTab: "projects",
};

export const adminPanelSlice = createSlice({
  name: "adminPanel",
  initialState,
  reducers: {
    setadminPanelTab: (state, action: PayloadAction<adminPanelTabType>) => {
      state.adminPanelTab = action.payload;
    },
  },
});

export const adminPanelActions = adminPanelSlice.actions;
export const adminPanelReducer = adminPanelSlice.reducer;
