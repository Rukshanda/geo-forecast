// we use the method to stoer our state in this
import { configureStore } from "@reduxjs/toolkit";
import geoLocationReducer from "../features/geoLocationSlice";
import weatherInfoSlice from "../features/weatherInfoSlice";
 export const store = configureStore({
  // aik function ho ta hay jo
  reducer: {
    fetchInfo: geoLocationReducer,
    weather: weatherInfoSlice
  },
});
