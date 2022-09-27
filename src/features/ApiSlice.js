import { createSlice } from "@reduxjs/toolkit";
import { ApiFetch } from "../utils";

const initialState = {
  data: {},
  api_key: sessionStorage.getItem("api_key") || false,
};

const ApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setKey: (state, action) => {
      if (action.payload) {
        sessionStorage.setItem("api_key", action.payload);
      } else {
        sessionStorage.removeItem("api_key");
      }
      state.api_key = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ApiFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(ApiFetch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = undefined;
    });

    builder.addCase(ApiFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching weather data";
    });
  },
});

export const { setKey } = ApiSlice.actions;
export default ApiSlice.reducer;
