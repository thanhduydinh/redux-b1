import { createReducer } from "@reduxjs/toolkit";
import { setIsFormVisible, setpreUser } from "./action";

const initialValue = {
  isFormVisible: false,
  preUser: {},
};

const reducers = createReducer(initialValue, (builder) =>
  builder
    .addCase(setIsFormVisible, (state, action) => {
      state.isFormVisible = action.payload;
    })
    .addCase(setpreUser, (state, action) => {
      state.preUser = action.payload;
    })
);

export default reducers;
