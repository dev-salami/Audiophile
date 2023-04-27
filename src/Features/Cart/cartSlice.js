import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cartItems: [],
	showCart: false,
	amount: 1,
	total: 0,
	isLoading: true,
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart: (state, { payload }) => {
			state.showCart = !state.showCart;
			console.log(state.showCart);
		},
	},
});
export const { toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
