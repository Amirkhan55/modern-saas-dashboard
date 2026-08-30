import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/ui/uiSlice";
import usersReducer from "../features/users/usersSlice";
import projectsReducer from "../features/projects/projectsSlice";
import notificationsReducer from "../features/notifications/notificationsSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    users: usersReducer,
    projects: projectsReducer,
    notifications: notificationsReducer
  }
});