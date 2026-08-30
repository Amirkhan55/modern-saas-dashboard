import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "Website Redesign", client: "Acme Inc.", progress: 82, status: "In Progress", due: "Sep 12, 2026" },
    { id: 2, name: "Mobile Application", client: "Northstar", progress: 64, status: "In Progress", due: "Sep 20, 2026" },
    { id: 3, name: "Brand System", client: "Vertex Labs", progress: 100, status: "Completed", due: "Aug 26, 2026" },
    { id: 4, name: "Analytics Platform", client: "Orbit", progress: 35, status: "Planning", due: "Oct 04, 2026" }
  ]
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action) {
      state.items.unshift({ id: Date.now(), ...action.payload });
    }
  }
});

export const { addProject } = projectsSlice.actions;
export default projectsSlice.reducer;