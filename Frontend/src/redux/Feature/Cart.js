import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: "66a4d6c47eecfc935a360561",
    quantity: 1,
},{
    id:"66a4d6c47eecfc935a360566",
    quantity: 4,
}];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const item = state.find((p) => p.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({
                    id: action.payload.id,
                    quantity: 1,
                });
            }
        },
        removeCart: (state, action) => {
            const item = state.find((p) => p.id === action.payload.id);
            if (item) {
              let temp =item.quantity;
              temp--;
              if (temp == 0) {
                return  state.filter((p) => p.id !== action.payload.id);
              }else{
                item.quantity--;
              }
            }
          }
          
          
    },
});

export const { addCart,removeCart } = cartSlice.actions;

export default cartSlice.reducer;
