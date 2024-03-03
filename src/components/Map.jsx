import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import useMapInfo from "../utils/getMapInfo";
import { FaLocationDot } from "react-icons/fa6";
import Sidepanel from "./Sidepanel";

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [layer, setLayer] = useState(null);
  const [clicked, setClicked] = useState(false);
  const { getMapInfo } = useMapInfo();

  const isLoading = useSelector((state) => state.fetchInfo.isLoading);
  const locationInfo = useSelector((state) => state.fetchInfo.locatationInfo); // Accessing locationInfo from the map slice state
  const weatherInfo = useSelector((state) => state.weather.weatherInfo);

  const handleMapClick = async (event) => {
    setClicked(true);
    getMapInfo(map, event);
  };

  const centerMapToCurrentLocation = () => {
    if (map) {
      map.locate({ setView: true, maxZoom: 16 });
      map.on("locationfound", handleMapClick);
    }
  };

  useEffect(() => {
    const mapOptions = {
      center: [51.958, 9.141],
      zoom: 10,
    };

    const newLayer = new L.TileLayer(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    );

    setLayer(newLayer);

    const newMap = L.map("map", mapOptions);
    setMap(newMap);

    return () => {
      newMap.remove();
    };
  }, []);

  useEffect(() => {
    if (map !== null && layer !== null) {
      map.addLayer(layer);
      map.on("click", handleMapClick);
    }
  }, [map, layer]);

  return (
    <div className="wrap mt-[20px] flex justify-between">
      <Sidepanel
        clicked={clicked}
        isLoading={isLoading}
        locationInfo={locationInfo}
        weatherInfo={weatherInfo}
      />

      <div className=" w-[50%]">
        <div
          id="map"
          style={{
            height: "638px",
            float: "right",
            width: "100%",
          }}
        ></div>

        <div className="btn flex items-center justify-between w-[190px] bg-indigo-700 px-[15px] py-[10px] rounded-full absolute top-[36rem] left-[69rem] z-[900] ">
          <span className="text-gray-200 text-2xl">
            <FaLocationDot />
          </span>
          <button
            className="text-gray-200 text-lg"
            onClick={() => centerMapToCurrentLocation(map)}
          >
            Current Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
