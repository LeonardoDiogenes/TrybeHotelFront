import styles from '../css/Grid.module.css';
import HotelCard from './HotelCard';
import { Hotel, HotelsByGeoResponse } from '../types/hotelType';

const Grid: React.FC<{ hotels: (Hotel | HotelsByGeoResponse)[] }> = ({ hotels = [] }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Hotéis</h1>
      <ul className={styles.list}>
        {hotels.map((hotel, index) => (
          <HotelCard key={hotel.id || index} hotel={hotel} />
        ))}
      </ul>
    </div>
  )
}

export default Grid;
