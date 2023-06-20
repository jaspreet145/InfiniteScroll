import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice.js";

const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export default store;
