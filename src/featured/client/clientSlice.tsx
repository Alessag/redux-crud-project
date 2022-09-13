import { createSlice } from "@reduxjs/toolkit";

import { ClientType } from "../../types/client";
const initialState: ClientType[] = [
  {
    id: "1",
    name: "Maria jose",
    fiscalNumber: "123456789",
    incomingDate: "2022-09-15",
  },
  {
    id: "2",
    name: "David Delgado",
    fiscalNumber: "123456789",
    incomingDate: "2022-09-15",
  },
  {
    id: "3",
    name: "Alessandra Amicarella",
    fiscalNumber: "123458879",
    incomingDate: "2022-09-15",
  },
  {
    id: "4",
    name: "Pepito perez",
    fiscalNumber: "12388789",
    incomingDate: "2022-09-15",
  },
  {
    id: "5",
    name: "Pedro pereziano",
    fiscalNumber: "123999989",
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
      const { name, fiscalNumber, incomingDate, id } = action.payload;
      const foundClient = state.find((client) => client.id === id);
      if (foundClient) {
        foundClient.name = name;
        foundClient.fiscalNumber = fiscalNumber;
        foundClient.incomingDate = incomingDate;
      }
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
