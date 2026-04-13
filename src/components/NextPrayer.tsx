import { IoIosTimer } from "react-icons/io";

interface NextPrayerProps {
  prayerName: string;
  remainingTime: string;
}

const NextPrayer = ({ prayerName, remainingTime }: NextPrayerProps) => {
  return (
    <div className="next-prayer">
      <div className="tag-name">
        <p className="prayer-text">Next Prayer</p>
      </div>
      <h1 className="prayer arab-lang">{prayerName || "...."}</h1>
      <div className="timer">
        <IoIosTimer />
        <p className="timer">{remainingTime}</p>
      </div>
    </div>
  );
};

export default NextPrayer;
