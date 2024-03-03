 import PropTypes from "prop-types";
import WeatherInfo from "./WeatherInfo";
import "../index.css";
import Logo from "./Logo";
import LocationInfo from "./LocationInfo"; // Import the LocationInfo component

export default function Sidepanel({
  clicked,
  isLoading,
  locationInfo,
  weatherInfo,
}) {
  return (
    <div className="w-[50%] side-panel bgforinfo text-white pl-[30px] pt-[30px] pb-[30px] pr-[30px] h-[638px]">
      <Logo />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {clicked ? (
            locationInfo && locationInfo.components._normalized_city ? (
              <>
                <LocationInfo locationInfo={locationInfo} /> {/* Render LocationInfo component */}
                <WeatherInfo weatherInfo={weatherInfo} />
              </>
            ) : (
              <p>Please click somewhere else. This is not a place</p>
            )
          ) : (
            <p className="text-center text-[20px]">
              Click somewhere to get started!!
            </p>
          )}
        </>
      )}
    </div>
  );
}

Sidepanel.propTypes = {
  clicked: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  locationInfo: PropTypes.shape({
    components: PropTypes.shape({
      _normalized_city: PropTypes.string,
      country: PropTypes.string,
      continent: PropTypes.string,
    }),
    annotations: PropTypes.shape({
      timezone: PropTypes.shape({
        name: PropTypes.string,
      }),
      currency: PropTypes.shape({
        iso_code: PropTypes.string,
      }),
      flag: PropTypes.string,
      DMS: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    }),
  }),
  weatherInfo: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number,
      feels_like: PropTypes.number,
      humidity: PropTypes.number,
      temp_max: PropTypes.number,
      temp_min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
    sys: PropTypes.shape({
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
    }),
  }),
};
