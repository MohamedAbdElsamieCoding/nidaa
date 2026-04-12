function App() {
  const prayers = [
    { name: "FAJR", time: "4:58", period: "AM" },
    { name: "SUNRISE", time: "6:35", period: "AM" },
    { name: "DHUHR", time: "12:46", period: "PM" },
    { name: "ASR", time: "4:10", period: "PM" },
    { name: "MAGHRIB", time: "7:03", period: "PM" },
    { name: "ISHA", time: "8:33", period: "PM" },
  ];
  return (
    <>
      <div className="container">
        <div className="data">
          <div className="header">
            <div className="tag-name">
              <h3>Nidaa - نداء</h3>
            </div>
            <h1>مواقيت الصلاه</h1>
            <h2>Prayer Times for Your Spiritual Journey</h2>
          </div>
          <div className="location-date">
            <div className="location">
              <span>📍 Location</span>
              <p>Alexandria, Egypt</p>
            </div>
            <div className="date">
              <span>📅 Date</span>

              <p>12 April 2026</p>
            </div>
            <div className="hijri">
              <span>🌙 Hijri</span>

              <p>15 Ramadhan 1447</p>
            </div>
          </div>
          <div className="next-prayer">
            <div className="tag-name">
              <p className="prayer-text">Next Prayer</p>
            </div>
            <h1 className="prayer">Dhuhr</h1>
            <p className="timer">⏱ 2 hours 45 minutes</p>
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
