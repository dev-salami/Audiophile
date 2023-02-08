import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [1, 2, 3, 4, 5],
  amount: 1,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, { payload }) => {
      state.amount = state.amount + 1;
    },
  },
});
export const { increase } = cartSlice.actions;
export default cartSlice.reducer;
