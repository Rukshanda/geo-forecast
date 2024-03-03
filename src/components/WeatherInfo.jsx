 
import PropTypes from "prop-types";

function WeatherInfo({ weatherInfo }) {
  return (
    <div className="pl-[20] pr-[20] pb-[20] pt-[18px]">
      <h3 className="font-extrabold text-[20px] mb-[10px]"> Weather Info Details</h3>
      <hr  className="mb-[10px]"/>
      <p>Today&apos;s Weather: {weatherInfo?.main?.temp} <span className="font-bold">°C</span> </p>
      <p>Feels Like: {weatherInfo?.main?.feels_like} <span className="font-bold">°C</span> </p>
      <p>Wind Speed : {weatherInfo?.wind?.speed} <span className="font-bold" >(km/h)</span> </p>
      <p>Humidity: {weatherInfo?.main?.humidity} <span className="font-bold" >%</span> </p>
      <p>Max Temp: {weatherInfo?.main?.temp_max} <span className="font-bold">°C</span> </p>
      <p>Min Temp: {weatherInfo?.main?.temp_min} <span className="font-bold">°C</span> </p>
      <p>
        Sunrise:{" "}
        {new Date(weatherInfo?.sys?.sunrise * 1000).toLocaleTimeString()}
      </p>
      <p>
        Sunset:{" "}
        {new Date(weatherInfo?.sys?.sunset * 1000).toLocaleTimeString()}
      </p>
    </div>
  );
}

WeatherInfo.propTypes = {
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

export default WeatherInfo;
