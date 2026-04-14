import { EGYPT_CITIES } from "../constants";

interface CitySelectorProps {
  onCityChange: (city: string) => void;
  currentCity: string;
}
const CitySelector = ({ onCityChange, currentCity }: CitySelectorProps) => {
  return (
    <div className="city-selector-container">
      <label htmlFor="city-select" className="city-label"></label>
      <select
        id="city-select"
        className="custom-select"
        value={currentCity}
        onChange={(e) => onCityChange(e.target.value)}
      >
        {EGYPT_CITIES.map((city) => (
          <option key={city.name} value={city.name}>
            {city.arName} - {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
