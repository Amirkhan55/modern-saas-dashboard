import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  darkMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },

    closeSidebar(state) {
      state.sidebarOpen = false;
    },

    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  toggleSidebar,
  closeSidebar,
  toggleDarkMode,
} = uiSlice.actions;

export default uiSlice.reducer;