const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add(state, action) {

        },
        remove() {

        }
    }
})

export const { add, remove } = cartSlice.action;
export const cartReducer = cartSlice.reducer;