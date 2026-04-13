import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { usePrayerTimes } from "./hooks/usePrayerTimes";

function App() {
  const { prayers, prayerData, loading, nextPrayerIndex, remainingTime } =
    usePrayerTimes();

  if (loading) return <div>Loading....</div>;

  return (
    <>
      <div className="container">
        <div className="data">
          <div className="header">
            <div className="tag-name">
              <h3 className="arab-lang">Nidaa - نداء</h3>
            </div>
            <h1 className="arab-lang">مواقيت الصلاه</h1>
            <h2>Prayer Times for Your Spiritual Journey</h2>
          </div>
          <div className="location-date">
            <div className="location">
              <div className="main-text">
                <CiLocationOn className="icon" />
                <span>Location</span>
              </div>
              <p>
                {prayerData?.meta.timezone.split("/")[1].replace("_", " ")},
                Egypt
              </p>
            </div>
            <div className="date">
              <div className="main-text">
                <MdOutlineDateRange className="icon" />
                <span>Date</span>
              </div>
              <p>{prayerData?.date.readable}</p>
            </div>
            <div className="hijri">
              <div className="main-text">
                <FaRegMoon className="icon" />
                <span>Hijri</span>
              </div>
              <p>
                {prayerData?.date.hijri.day} {prayerData?.date.hijri.month.ar}{" "}
                {prayerData?.date.hijri.year}
              </p>
            </div>
          </div>
          <div className="next-prayer">
            <div className="tag-name">
              <p className="prayer-text">Next Prayer</p>
            </div>
            <h1 className="prayer arab-lang">
              {prayers[nextPrayerIndex]?.name || "...."}
            </h1>
            <div className="timer">
              <IoIosTimer />
              <p className="timer">{remainingTime}</p>
            </div>
          </div>
          <div className="prayers-grid">
            {prayers.map((prayer, index) => (
              <div key={index} className="prayer-card">
                <span className="prayer-title">{prayer.name}</span>
                <div className="prayer-time">{prayer.time}</div>
                <span className="prayer-period">{prayer.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
