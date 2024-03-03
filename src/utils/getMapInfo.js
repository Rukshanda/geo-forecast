import L from "leaflet";
import { fetchLocationInfo } from "../features/geoLocationSlice";
import { fetchWeatherInfo } from "../features/weatherInfoSlice"; // Import fetchWeatherInfo action
import { useDispatch } from "react-redux";
import { useState } from "react";
import "leaflet/dist/leaflet.css";


const useMapInfo = () => {
  const dispatch = useDispatch();
  const [marker, setMarker] = useState(null);

  const getMapInfo = async (map, event) => {
    // Remove the previous marker if it exists
    const { latlng } = event;
    if (map) {
      if (marker !== null) {
        map.removeLayer(marker);
      }

      // Add a new marker to the clicked location
      const newMarker = L.marker([latlng.lat, latlng.lng]).addTo(map);
      setMarker(newMarker);

      const lat = latlng.lat;
      const lng = latlng.lng;
      const coordinates = { lat, lng };

      try {
        // Dispatch action to fetch location info
        await dispatch(fetchLocationInfo(coordinates));

        // Dispatch action to fetch weather info
        await dispatch(fetchWeatherInfo(coordinates));
      } catch (error) {
        console.error("Error fetching location info:", error);
      }
    }
  };

  return { getMapInfo };
};

export default useMapInfo;
