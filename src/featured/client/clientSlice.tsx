import { createSlice } from "@reduxjs/toolkit";

import { ClientType } from "../../types/client";
const initialState: ClientType[] = [
  {
    id: "1",
    name: "Name 1",
    fiscalNumber: "123456789",
    incomingDate: "2022-09-15",
  },
  {
    id: "2",
    name: "Name 2",
    fiscalNumber: "123456789",
    incomingDate: "2022-09-15",
  },
];

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    createClient: (state, action) => {
      state.push(action.payload);
    },
    editClient: (state, action) => {
      console.log("Edit", state, action);
    },
    deleteClient: (state, action) => {
      const findIndex = state.findIndex(
        (client) => client.id === action.payload
      );
      state.splice(findIndex, 1);
    },
  },
});

export const { createClient, editClient, deleteClient } = clientSlice.actions;

export default clientSlice.reducer;
