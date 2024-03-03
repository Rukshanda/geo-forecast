 
// we have used redux toolkit here we are using createAsyncThunk method to fetch our data 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



 // 1)- Initial State  
 const initialState =  {
   locatationInfo : null,
   isLoading: false,
   error : null
 }
 //2)- Action to fetch Our Location Info
export const fetchLocationInfo = createAsyncThunk(
  // 1) - Give name
  'map/fetchLocationInfo',
  // 2) - Call the async function
  async (coordinates, thunkAPI) => {
    try {
      const { lat, lng } = coordinates;
      const APIKEY = "32090fdd062946f2807f7a78017160d8";
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?key=${APIKEY}&q=${lat}+${lng}&pretty=1`
      );
      const { components, annotations } = response.data.results[0];
      return { components, annotations };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);  
 //3)- Reducers or functions to fetch the data
 export const geoLocationSlice = createSlice({
   name : 'fetchInfo',
   initialState,
   extraReducers: (builder) => {
    builder
    .addCase(fetchLocationInfo.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchLocationInfo.fulfilled , (state, action)=> {
      state.isLoading = false;
      state.locatationInfo = action.payload
    })
    .addCase(fetchLocationInfo.rejected , (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    })
   }
 })
//4)- Export the reducers
export default geoLocationSlice.reducer;