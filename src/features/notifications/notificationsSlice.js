import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    items: [
      { id: 1, title: "New project assigned", text: "You were assigned to Website Redesign.", time: "10 min ago", read: false },
      { id: 2, title: "Payment received", text: "Acme Inc. paid invoice #1048.", time: "1 hour ago", read: false },
      { id: 3, title: "Weekly report ready", text: "Your weekly performance report is ready.", time: "Yesterday", read: true }
    ]
  },
  reducers: {
    markRead(state, action) {
      const item = state.items.find(n => n.id === action.payload);
      if (item) item.read = true;
    },
    markAllRead(state) {
      state.items.forEach(n => n.read = true);
    }
  }
});

export const { markRead, markAllRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;