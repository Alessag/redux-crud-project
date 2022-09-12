import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {},
  reducers: {
    createClient: (state, action) => {
      console.log("Create", state, action);
    },
    editClient: (state, action) => {
      console.log("Edit", state, action);
    },
    deleteClient: (state, action) => {
      console.log("Delete", state, action);
    },
  },
});

export const { createClient, editClient, deleteClient } = clientSlice.actions;

export default clientSlice.reducer;
