import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ApiFetch = createAsyncThunk(
  "api/ApiFetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const API_KEY = getState().api.api_key;
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}&units=metric`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const validateApiKey = async (KEY) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=${KEY}&units=metric`
  );

  return response.status !== 401;
};
