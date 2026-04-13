import { usePrayerTimes } from "./hooks/usePrayerTimes";
import PrayersCard from "./components/PrayersGrid";
import NextPrayer from "./components/NextPrayer";
import Header from "./components/Header";
import LocationData from "./components/LocationData";

function App() {
  const { prayers, prayerData, loading, nextPrayerIndex, remainingTime } =
    usePrayerTimes();

  if (loading) return <div>Loading....</div>;

  return (
    <>
      <div className="container">
        <div className="data">
          <Header />
          <LocationData prayerData={prayerData} />
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
