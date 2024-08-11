import styles from '../css/Grid.module.css';
import HotelCard from './HotelCard';
import { Hotel, HotelsByGeoResponse } from '../types/hotelType';
import { RoomResponse } from '../types/roomType';

type GridProps = {
  data: (Hotel | HotelsByGeoResponse | RoomResponse)[];
};

const Grid: React.FC<GridProps> = ({ data = [] }) => {
  const isRoom = data.length > 0 && "roomId" in data[0];

  return (
    <div className={styles.wrapper}>
      <h1>{isRoom ? 'Quartos' : 'Hotéis'}</h1>
      <ul className={styles.list}>
        {data.map((item) => {
          if ("hotelId" in item) {
            return <HotelCard data={item as RoomResponse} />;
          } else {
            return <HotelCard data={item as Hotel | HotelsByGeoResponse} />;
          }
        })}
      </ul>
    </div>
  );
}

export default Grid;
