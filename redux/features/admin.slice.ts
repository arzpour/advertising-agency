import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type adminPanelTabType =
  | "tickets"
  | "projects"
  | "blogs"
  | "adminInfo"
  | "categories"
  | "services";

interface IAdminInfo {
  name: string;
  email: string;
}

interface AdminPanelState {
  adminPanelTab: adminPanelTabType;
  adminInfo: IAdminInfo;
}

const initialState: AdminPanelState = {
  adminPanelTab: "projects",
  adminInfo: {
    name: "",
    email: "",
  },
};

export const adminPanelSlice = createSlice({
  name: "adminPanel",
  initialState,
  reducers: {
    setAdminPanelTab: (state, action: PayloadAction<adminPanelTabType>) => {
      state.adminPanelTab = action.payload;
    },
    setAdminInfo: (state, action: PayloadAction<IAdminInfo>) => {
      state.adminInfo = action.payload;
    },
  },
});

export const adminPanelActions = adminPanelSlice.actions;
export const adminPanelReducer = adminPanelSlice.reducer;
