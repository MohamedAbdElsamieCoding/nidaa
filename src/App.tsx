import { usePrayerTimes } from "./hooks/usePrayerTimes";
import PrayersCard from "./components/PrayersGrid";
import NextPrayer from "./components/NextPrayer";
import Header from "./components/Header";
import LocationData from "./components/LocationData";
import CitySelector from "./components/CitySelector";
import { useState } from "react";

function App() {
  const [city, setCity] = useState<string>("Cairo");

  const { prayers, prayerData, loading, nextPrayerIndex, remainingTime } =
    usePrayerTimes(city);

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
  };

  if (loading && !prayerData) return <div className="loading">Loading....</div>;

  return (
    <>
      <div className="container">
        <div className="data">
          <Header />
          <div className="selector-wrapper" style={{ marginBottom: "20px" }}>
            <CitySelector currentCity={city} onCityChange={handleCityChange} />
            {loading && <p className="updating-text">Updating times...</p>}
          </div>
          <LocationData prayerData={prayerData} cityName={city} />
          <NextPrayer
            prayerName={prayers[nextPrayerIndex]?.name}
            remainingTime={remainingTime}
          />
          <div className="prayers-grid">
            {prayers.map((prayer, index) => (
              <PrayersCard
                key={index}
                name={prayer.name}
                period={prayer.period}
                time={prayer.time}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
