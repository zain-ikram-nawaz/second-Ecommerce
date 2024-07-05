import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  productdata: [],
  isLoading: false,
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  try {
    const result = await fetch("https://final-rho-one.vercel.app/sendproduct");
    return result.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

export const fetchDataslice = createSlice({
  name: "product data",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productdata = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default fetchDataslice.reducer;
