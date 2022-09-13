import { createSlice } from "@reduxjs/toolkit";
import { Service } from "../../types/service";

const initialState: Service[] = [
  {
    id: "1",
    title: "Service 1",
    startDate: "2022-09-15",
    endDate: "2022-09-15",
    price: 100,
  },
  {
    id: "2",
    title: "Service 2",
    startDate: "2022-09-15",
    endDate: "2022-09-15",
    price: 100,
  },
  {
    id: "3",
    title: "Service 3",
    startDate: "2022-09-15",
    endDate: "2022-09-15",
    price: 100,
  },
];

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    createService: (state, action) => {
      state.push(action.payload);
    },
    editService: (state, action) => {
      const { id, title, startDate, endDate, price } = action.payload;
      const foundService = state.find((service) => service.id === id);
      if (foundService) {
        foundService.title = title;
        foundService.id = id;
        foundService.startDate = startDate;
        foundService.endDate = endDate;
        foundService.price = price;
      }
    },
    deleteService: (state, action) => {
      const findIndex = state.findIndex(
        (service) => service.id === action.payload
      );
      state.splice(findIndex, 1);
    },
  },
});

export const { createService, editService, deleteService } =
  serviceSlice.actions;

export default serviceSlice.reducer;
