import { CiLocationOn } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

interface PrayerData {
  meta: {
    timezone: string;
  };
  date: {
    readable: string;
    hijri: {
      day: string;
      month: {
        ar: string;
      };
      year: string;
    };
  };
}

interface LocationDataProps {
  prayerData: PrayerData | null | undefined;
  cityName: string;
}

const LocationData: React.FC<LocationDataProps> = ({
  prayerData,
  cityName,
}) => {
  const hijri = prayerData?.date.hijri;
  return (
    <div className="location-date-container">
      <div className="location">
        <div className="info-header">
          <CiLocationOn className="icon" />
          <span>Location</span>
        </div>
        <p className="info-value">{cityName}, Egypt</p>
      </div>
      <div className="date">
        <div className="info-header">
          <MdOutlineDateRange className="icon" />
          <span>Date</span>
        </div>
        <p className="info-value">{prayerData?.date.readable}</p>
      </div>
      <div className="hijri">
        <div className="info-header">
          <FaRegMoon className="icon" />
          <span>Hijri</span>
        </div>
        <p className="info-value">
          {hijri ? `${hijri.day} ${hijri.month.ar} ${hijri.year}` : "...."}
        </p>
      </div>
    </div>
  );
};

export default LocationData;
