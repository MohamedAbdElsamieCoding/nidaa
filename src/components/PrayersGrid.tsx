interface PrayerCardProps {
  name: string;
  time: string;
  period: string;
}
const PrayersCard = ({ name, time, period }: PrayerCardProps) => {
  return (
    <div className="prayer-card">
      <span className="prayer-title">{name}</span>
      <div className="prayer-time">{time}</div>
      <span className="prayer-period">{period}</span>
    </div>
  );
};

export default PrayersCard;
