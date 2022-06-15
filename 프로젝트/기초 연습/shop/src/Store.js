import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
  },
});

export let { nameChange, addCount } = cart.actions;

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let item = createSlice({
  name: "item",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    cart: cart.reducer,
    stock: stock.reducer,
    item: item.reducer,
  },
});
