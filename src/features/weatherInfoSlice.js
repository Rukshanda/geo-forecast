import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchWeatherInfo = createAsyncThunk(
    'map/fetchWeatherInfo',
    async (coordinates, thunkAPI) => {
      try {
        const API_KEY = '661bfd4e93c0c21befc5786e94e79d69';
        const { lat, lng } = coordinates;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        );
        console.log(response.data)
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
      weatherInfo: null,
      isLoading: false,
      error: null
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchWeatherInfo.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchWeatherInfo.fulfilled, (state, action) => {
          state.isLoading = false;
          state.weatherInfo = action.payload;
        })
        .addCase(fetchWeatherInfo.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    }
  });
  export default weatherSlice.reducer;