import { createSlice } from "@reduxjs/toolkit";

const AddToCartSlice = createSlice({
    name: "addToCart",
    initialState: {cartData: []},
    reducers: {
        setCartData: (state, action) => {
            const cartItem = action.payload;
            const exist = state.cartData.find((item) => item.id === cartItem.id)


            if (exist) {
                exist.quantity += 1
            } else {
                state.cartData.push({...cartItem, quantity: 1})
            }
        },
        setRemoveFromCart: (state, action) => {
            const cartItem = action.payload;
            state.cartData = state.cartData.filter((item) => item.id !== cartItem)
        }
    }
})


export default AddToCartSlice.reducer;
export const {setCartData, setRemoveFromCart} = AddToCartSlice.actions;