import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkMode = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    return true;
  }

  if (savedTheme === "light") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const initialState = {
  sidebarOpen: false,
  darkMode: getInitialDarkMode(),
};

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },

    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },

    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },

    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  closeSidebar,
  toggleDarkMode,
  setDarkMode,
} = uiSlice.actions;

export default uiSlice.reducer;