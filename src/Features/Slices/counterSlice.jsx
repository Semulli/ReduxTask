import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    addition: (state, action) => {
      state.count += action.payload;
    },
    subtract: (state, action) => {
      const number = state.count - action.payload;
      state.count = number < 0 ? 0 : number;
    },
    resetCount: () => {
      return initialState;
    },
  },
});
export const { increment, decrement, addition, subtract, resetCount } =
  counterSlice.actions;
export default counterSlice.reducer;
