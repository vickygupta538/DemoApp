import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {};

export const slice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      state[id] = state[id] || { ...action.payload, count: 0 };
      state[id].count++;
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      if (state[id].count > 1) {
        state[id].count--;
      } else {
        delete state[id];
      }
    },
  },
});

export const { addToCart, removeFromCart } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state) => state.cart;

export const selectCount = createSelector(selectCart, (cart) => {
  return Object.values(cart).reduce((acc, value) => {
    return acc + value.count;
  }, 0);
});

export const selectTotal = createSelector(selectCart, (cart) => {
  return Object.values(cart).reduce((acc, value) => {
    return acc + value.price * value.count;
  }, 0);
});

export default slice.reducer;
