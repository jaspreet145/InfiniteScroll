import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  displayItems: [],
  pageNumber: 1,
};

export const fetchApi = createAsyncThunk("page/fetchApi", (page) => {
  const apiRoute = `https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=${page}`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios
    .get(apiRoute, options)
    .then((res) => res.data.data)
    .then((res) => res.recruits)
    .then((res) => {
      let index = 0;
      while (res.length < 9) {
        res.push(res[index++]);
      }
      return res;
    })
    .catch((err) => console.log(err));
});

const PageSlice = createSlice({
  name: "page",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.displayItems = [...state.displayItems, ...action.payload];
      state.pageNumber++;
    });
  },
});

export default PageSlice.reducer;
