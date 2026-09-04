import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Sophie van Dijk",
      email: "Sophie.van.Dijk@acme.com",
      role: "Admin",
      status: "Active",
      joined: "Aug 21, 2026"
    },
    {
      id: 2,
      name: "Jackson Lee",
      email: "jackson@acme.com",
      role: "Manager",
      status: "Active",
      joined: "Aug 18, 2026"
    },
    {
      id: 3,
      name: "Isabella Nguyen",
      email: "isabella@acme.com",
      role: "Designer",
      status: "Active",
      joined: "Aug 14, 2026"
    },
    {
      id: 4,
      name: "William Kim",
      email: "william@acme.com",
      role: "Developer",
      status: "Inactive",
      joined: "Aug 10, 2026"
    },
    {
      id: 5,
      name: "Sofia Davis",
      email: "sofia@acme.com",
      role: "Marketing",
      status: "Active",
      joined: "Aug 06, 2026"
    }
  ]
};

const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    
    addUser(state, action) {
      state.items.unshift({
        id: Date.now(),
        ...action.payload
      });
    },

    
    updateUser(state, action) {
      const { id, ...updatedUser } = action.payload;

      const userIndex = state.items.findIndex(
        user => user.id === id
      );

      if (userIndex !== -1) {
        state.items[userIndex] = {
          ...state.items[userIndex],
          ...updatedUser
        };
      }
    },

    removeUser(state, action) {
      state.items = state.items.filter(
        user => user.id !== action.payload
      );
    }
  }
});

export const {
  addUser,
  updateUser,
  removeUser
} = usersSlice.actions;

export default usersSlice.reducer;