import { FaCloud } from "react-icons/fa6";

export default function Logo() {
  return (
    <div className="logo flex justify-between items-center w-56 mb-[20px]">
      <span className="text-gray-200 text-5xl">
        <FaCloud />
      </span>
      <p className="text-3xl text-gray-200">GeoForecast</p>
    </div>
  );
}
