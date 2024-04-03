import { configureStore } from '@reduxjs/toolkit';

import reducer from "./reducer"

export const store = configureStore({
  reducer:reducer
  // reducer: {
  //   character: reducer,
  // },
});


export default store;