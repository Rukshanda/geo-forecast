 
import PropTypes from "prop-types";

function LocationInfo({ locationInfo }) {
  return (
    <div className="p-[20] ">
      <h3 className="font-extrabold text-[20px] mb-[10px]">Place Info Details</h3>
      <hr className="mb-[10px]" />
      <p>City: {locationInfo.components._normalized_city}</p>
      <p>Country: {locationInfo.components.country}</p>
      <p>Timezone: {locationInfo.annotations.timezone.name}</p>
      <p>Continent: {locationInfo.components.continent}</p>{" "}
      <p>Currency: {locationInfo.annotations.currency.iso_code}</p>
      <p>Flag: {locationInfo.annotations.flag}</p>
      <p>Latitude: {locationInfo.annotations.DMS.lat}</p>
      <p>Longitude: {locationInfo.annotations.DMS.lng}</p>
    </div>
  );
}

LocationInfo.propTypes = {
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
};

export default LocationInfo;
