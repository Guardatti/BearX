import { createSlice } from "@reduxjs/toolkit";
import { SHIPPING_COST } from '../../utils/constants'
import { addItemToCart, removeItemToCart, resetShippingCost } from "./cartUtils";

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            return{
                ...state,
                shippingCost: SHIPPING_COST,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        },
        removeFromCart: (state, action) => {
            return{
                ...state,
                cartItems: removeItemToCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
            };
        },
        clearCart: (state) => {
            return{
                ...state,
                shippingCost: 0,
                cartItems: []
            };
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions

export default cartSlice.reducer;